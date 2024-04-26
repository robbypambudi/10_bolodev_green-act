import withAuth from "@/components/hoc/withAuth"

export default withAuth(AuthPage, 'all');
function AuthPage() {
  return (
    <div>
      <h1>Auth Page</h1>
    </div>
  )
}