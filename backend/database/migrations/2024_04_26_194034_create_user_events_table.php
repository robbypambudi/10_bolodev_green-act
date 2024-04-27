<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_events', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('event_id');

            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('event_id')->references('id')->on('events')->onDelete('cascade');

            $table->boolean('is_attending')->default(false);
            $table->boolean('is_completed')->default(false);

            // Latitude and Longitude Attending and Completed
            $table->decimal('latitude_attending', 10, 8)->nullable();
            $table->decimal('longitude_attending', 11, 8)->nullable();

            $table->decimal('latitude_completed', 10, 8)->nullable();
            $table->decimal('longitude_completed', 11, 8)->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_event');
    }
};
