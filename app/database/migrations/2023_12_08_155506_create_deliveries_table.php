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
        Schema::create('deliveries', function (Blueprint $table) {
            $table->id();
            $table->foreignId('delivery_person_id')->constrained('staffs')->onDelete('restrict')->onUpdate('cascade');
            $table->foreignId('location_id')->constrained('locations')->onDelete('restrict')->onUpdate('cascade');
            $table->tinyInteger('status')->default(1)->comments("
                1 :- Processing
                2 :- Out for Delivery
                3 :- Delivered
                4 :- Returned
                0 :- Cancelled 
            ");
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::table('packages', function (Blueprint $table) {
            $table->foreignId('delivery_id')->nullable()->constrained('deliveries')->onDelete('set null')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('packages', function (Blueprint $table) {
            $table->dropConstrainedForeignId('delivery_id');
        });
        Schema::dropIfExists('deliveries');
    }
};
