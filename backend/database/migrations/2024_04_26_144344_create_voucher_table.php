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
        Schema::create('vouchers', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('code')->unique();
            $table->decimal('discount', 8, 2);
            $table->decimal('minimum_points', 8, 2)->nullable();
            $table->dateTime('expiry_date');
            $table->text('description')->nullable();
            $table->enum('status', ['active', 'expired', 'inactive'])->default('active');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('voucher');
    }
};
