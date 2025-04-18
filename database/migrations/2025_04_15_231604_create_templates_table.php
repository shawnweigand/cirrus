<?php

use App\Enums\Template\TemplateCategoryEnum;
use App\Enums\Template\TemplateKindEnum;
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
        Schema::create('templates', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->enum('category', TemplateCategoryEnum::getValues());
            $table->enum('kind', TemplateKindEnum::getValues());
            $table->string('source');
            $table->string('version');
            $table->json('form')->nullable();
            $table->foreignId('organization_id')
                ->constrained()
                ->cascadeOnDelete();
            $table->boolean('is_active')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('templates');
    }
};
