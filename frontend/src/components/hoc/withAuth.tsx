import { LoaderIcon } from 'lucide-react';
import { useRouter } from 'next/router';
import * as React from 'react';

import api from '@/lib/axios';
import { getToken, removeToken } from '@/lib/cookie';

import useAuthStore from '@/store/useAuthStore';

import { ApiResponse } from '@/types/api';
import { ROLE, Role } from '@/types/entities/role';
import { User } from '@/types/entities/user';

export interface WithAuthProps {
  user: User;
}

const HOME_ROUTE = '/';
const LOGIN_ROUTE = '/login';

const ROUTE_ROLES = [
  /**
   * For authentication pages
   * @example /login /register
   */
  'auth',
  /**
   * Optional authentication
   * It doesn't push to login page if user is not authenticated
   */
  'optional',
  /**
   * For all authenticated user
   * will push to login if user is not authenticated
   */
  'all',
] as const;
type RouteRole = (typeof ROUTE_ROLES)[number];

/**
 * Add role-based access control to a component
 *
 * @see https://react-typescript-cheatsheet.netlify.app/docs/hoc/full_example/
 * @see https://github.com/mxthevs/nextjs-auth/blob/main/src/components/withAuth.tsx
 */

export const isRole = (p: Role): p is Role => ROLE.includes(p as Role);

export default function withAuth<T extends WithAuthProps = WithAuthProps>(
  Component: React.ComponentType<T>,
  routeRole: RouteRole,
) {
  const ComponentWithAuth = (props: Omit<T, keyof WithAuthProps>) => {
    const router = useRouter();
    const { query } = router;

    //#region  //*=========== STORE ===========
    const isAuthenticated = useAuthStore.useIsAuthenticated();
    const isLoading = useAuthStore.useIsLoading();
    const login = useAuthStore.useLogin();
    const logout = useAuthStore.useLogout();
    const stopLoading = useAuthStore.useStopLoading();
    const user = useAuthStore.useUser();
    //#endregion  //*======== STORE ===========

    const checkAuth = React.useCallback(() => {
      const token = getToken();
      if (!token) {
        isAuthenticated && logout();
        stopLoading();
        return;
      }
      const loadUser = async () => {
        try {
          const res = await api.get<ApiResponse<User>>('/auth/me');

          login({
            ...res.data.data,
            token: token + '',
          });
        } catch (err) {
          removeToken();
        } finally {
          stopLoading();
        }
      };

      if (!isAuthenticated) {
        loadUser();
      }
    }, [isAuthenticated, login, logout, stopLoading]);

    React.useEffect(() => {
      // run checkAuth every page visit
      checkAuth();

      // run checkAuth every focus changes
      window.addEventListener('focus', checkAuth);
      return () => {
        window.removeEventListener('focus', checkAuth);
      };
    }, [checkAuth]);

    React.useEffect(() => {
      if (!isLoading) {
        if (isAuthenticated) {
          // Prevent authenticated user from accessing auth or other role pages
          if (routeRole === 'auth' && user?.type !== 'user') {
            if (query?.redirect) {
              router.replace(query.redirect as string);
            } else {
              router.replace(HOME_ROUTE);
            }
          }
        } else {
          // Prevent unauthenticated user from accessing protected pages
          if (routeRole !== 'auth' && routeRole !== 'optional') {
            router.replace(
              `${LOGIN_ROUTE}?redirect=${router.asPath}`,
              `${LOGIN_ROUTE}`,
            );
          }
        }
      }
    }, [isAuthenticated, isLoading, query, router, user]);

    if (
      // If unauthenticated user want to access protected pages
      (isLoading || !isAuthenticated) &&
      // auth pages and optional pages are allowed to access without login
      routeRole !== 'auth' &&
      routeRole !== 'optional'
    ) {
      return (
        <div className='flex min-h-screen flex-col items-center justify-center text-gray-800'>
          <LoaderIcon className='mb-4 animate-spin text-4xl' />
          <p>Loading...</p>
        </div>
      );
    }

    return <Component {...(props as T)} user={user} />;
  };

  return ComponentWithAuth;
}
