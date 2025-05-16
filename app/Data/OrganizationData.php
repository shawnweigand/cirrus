<?php

namespace App\Data;

use App\Models\Organization;
use Illuminate\Database\Eloquent\Collection;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;

class OrganizationData extends Data
{
    public function __construct(
        public string $slug,
        public string $name,
        #[DataCollectionOf(TemplateData::class)]
        public ?Collection $templates = null,
        public string $created_at,
        public string $updated_at
    ) {}

    public static function fromModel(Organization $org): self
    {
        return new self(
            $org->slug,
            $org->name,
            $org->relationLoaded('templates') ? TemplateData::collect($org->templates) : null, // Include templates if loaded
            $org->created_at->toDateTimeString(),
            $org->updated_at->toDateTimeString()
        );
    }
}
