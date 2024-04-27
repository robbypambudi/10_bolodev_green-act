<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CampaignController;
use App\Http\Controllers\MainController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VendorController;

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::post('/register', [AuthController::class, 'register'])->name('register');
    Route::post('/login', [AuthController::class, 'login'])->name('login');
    Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:api')->name('logout');
    Route::post('/refresh', [AuthController::class, 'refresh'])->middleware('auth:api')->name('refresh');
    Route::get('/me', [AuthController::class, 'me'])->middleware('auth:api')->name('me');
});

// Landing Page
Route::group([
    'middleware' => 'api',
    'prefix' => 'main'
], function ($router) {
    Route::get('/campaigns', [MainController::class, 'campaigns'])->name('campaigns');
    Route::get('/events', [MainController::class, 'events'])->name('events');
});

// Campaigns
Route::group([
    'middleware' => 'api',
    'prefix' => 'campaigns'
], function ($router) {
    Route::get('/', [CampaignController::class, 'index'])->name('campaigns.index');

    // Task 
    Route::post('/task/{campaign_task_id}', [CampaignController::class, 'task'])->middleware('auth:api')->name('campaigns.task');

    // Ikut Campaign
    Route::get('/register/{id}', [CampaignController::class, 'register'])->middleware('auth:api')->name('campaigns.register');

    Route::get('/{id}', [CampaignController::class, 'detail'])->name('campaigns.detail');
});

// Events
Route::group([
    'middleware' => 'api',
    'prefix' => 'events'
], function ($router) {
    Route::get('/', [EventController::class, 'index'])->name('events.index');
    Route::get('/register/{id}', [EventController::class, 'register'])->middleware('auth:api')->name('events.register');
    Route::get('/{id}', [EventController::class, 'detail'])->name('events.detail');
});

// User
Route::group([
    'middleware' => 'api',
    'prefix' => 'user'
], function ($router) {
    Route::get('/', [UserController::class, 'index'])->middleware('auth:api')->name('user.index');
    Route::get('/activity', [UserController::class, 'activity'])->middleware('auth:api')->name('user.activity');
    Route::get('/campaigns', [UserController::class, 'campaigns'])->middleware('auth:api')->name('user.campaigns');
    Route::get('/events', [UserController::class, 'events'])->middleware('auth:api')->name('user.events');
    Route::get('/{id}', [UserController::class, 'detail'])->middleware('auth:api')->name('user.detail');
});

Route::group([
    'middleware' => 'api',
    'prefix' => 'vendor'
], function ($router) {
    Route::get('/campaigns', [VendorController::class, 'campaigns'])->middleware('auth:api')->name('vendor.campaigns');
});
