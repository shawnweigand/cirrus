<?php

namespace App\Data;

use App\Enums\Template\TemplateCategoryEnum;
use App\Enums\Template\TemplateKindEnum;
use App\Models\Template;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Attributes\Validation\Enum;

class TemplateData extends Data
{
    public function __construct(
        public string $name,
        public ?string $description = null,
        #[Enum(TemplateCategoryEnum::class)]
        public string $category,
        #[Enum(TemplateKindEnum::class)]
        public string $kind,
        public string $source,
        public string $version,
        public ?array $form = null,
        public bool $is_active = false,
        public ?OrganizationData $organization = null,
        public string $created_at,
        public string $updated_at
    ) {}

    public static function fromModel(Template $template): self
    {
        return new self(
            $template->name,
            $template->description,
            $template->category->description,
            $template->kind->description,
            $template->source,
            $template->version,
            $template->form,
            $template->is_active,
            $template->relationLoaded('organiation') ? OrganizationData::collect($template->organization) : null, // Include org if loaded
            $template->created_at->toDateTimeString(),
            $template->updated_at->toDateTimeString()
        );
    }
}
