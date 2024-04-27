<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Events;
use App\Models\UserEvents;

class EventController extends Controller
{
    public function index()
    {
        // Get 10 Latest Events
        $events = Events::all();

        return response()->json([
            'code' => 200,
            'message' => 'Success get events',
            'data' => [
                'events' => $events
            ]
        ]);
    }

    public function detail($id)
    {
        // Get Events by ID
        $event = Events::find($id);


        // If not logged in, return false
        if (!auth()->user()) {
            return response()->json([
                'code' => 200,
                'message' => 'Success get event',
                'data' => [
                    'event' => $event,
                ]
            ]);
        }

        $eventUser = UserEvents::where('user_id', auth()->user()->id)
            ->where('event_id', $id)
            ->first();

        return response()->json([
            'code' => 200,
            'message' => 'Success get event',
            'data' => [
                'event' => $event,
                'is_registered' => $eventUser ? true : false
            ]
        ]);
    }

    public function register($id)
    {
        // Check if user already registered
        $eventUser = UserEvents::where('user_id', auth()->user()->id)
            ->where('event_id', $id)
            ->first();

        if ($eventUser) {
            return response()->json([
                'code' => 400,
                'message' => 'You already registered this event',
            ])->setStatusCode(400);
        }

        // Register User to Event
        $userEvent = new UserEvents;
        $userEvent->user_id = auth()->user()->id;
        $userEvent->event_id = $id;
        $userEvent->save();

        return response()->json([
            'code' => 200,
            'message' => 'Success register event',
            'data' => [
                'event' => $userEvent
            ]
        ]);
    }
}
