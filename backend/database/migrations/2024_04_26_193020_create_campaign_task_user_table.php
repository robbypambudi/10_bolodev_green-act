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
        Schema::create('campaign_task_user', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('campaign_task_id');
            $table->unsignedBigInteger('user_id');

            $table->foreign('campaign_task_id')->references('id')->on('campaign_tasks')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending');
            $table->string('proof')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('table_campaign_task_user');
    }
};
