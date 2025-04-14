<?php

namespace App\Data;

use App\Models\Organization;
use Spatie\LaravelData\Data;

class OrganizationData extends Data
{
    public function __construct(
        public string $slug,
        public string $name,
    ) {}

    public static function fromModel(Organization $org): self
    {
        return new self(
            $org->slug,
            $org->name
        );
    }
}
