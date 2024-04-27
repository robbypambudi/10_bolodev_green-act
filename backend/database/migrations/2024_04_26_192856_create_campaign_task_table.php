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
        Schema::create('campaign_tasks', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('campaign_id');

            $table->string('title');
            $table->text('description');
            $table->string('image')->nullable();

            $table->foreign('campaign_id')->references('id')->on('campaigns')->onDelete('cascade');
            
            $table->timestamps();
        });
    }

    /*
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('campaign_tasks');
    }
};
