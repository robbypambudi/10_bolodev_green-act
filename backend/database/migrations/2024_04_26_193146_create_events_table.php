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
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            
            $table->string('title');
            $table->text('description');
            $table->string('image');

            // Kuota
            $table->decimal('quota', 10, 2)->default(0);

            // Tanggal mulai dan selesai
            $table->dateTime('start_date');
            $table->dateTime('end_date');

            // Tempat longitude dan latitude
            $table->decimal('longitude');
            $table->string('latitude');

            // Kategori
            $table->json('category');

            // Jumlah peserta
            $table->decimal('participants', 10, 2)->default(0);

            // Poin hadiah
            $table->decimal('reward_points', 10, 2)->default(0);




            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
