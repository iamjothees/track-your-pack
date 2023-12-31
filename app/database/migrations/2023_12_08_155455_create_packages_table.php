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
        Schema::create('packages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('dispatcher_id')->constrained('users')->onDelete('restrict')->onUpdate('cascade');
            $table->foreignId('receiver_id')->constrained('users')->onDelete('restrict')->onUpdate('cascade');
            $table->unsignedBigInteger('weight_in_grams')->nullable();
            $table->timestamps();
            $table->softDeletes(); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('packages');
    }
};
