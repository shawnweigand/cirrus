<?php

namespace App\Data;

use App\Data\Form\FieldData;
use App\Enums\Template\TemplateCategoryEnum;
use App\Enums\Template\TemplateKindEnum;
use App\Models\Template;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\Attributes\Validation\Enum;
use Spatie\LaravelData\DataCollection;

class TemplateData extends Data
{
    public function __construct(
        public string $slug,
        public string $name,
        public ?string $description = null,
        #[Enum(TemplateCategoryEnum::class)]
        public string $category,
        #[Enum(TemplateKindEnum::class)]
        public string $kind,
        public string $source,
        public string $version,
        public ?DataCollection $form = new DataCollection(FieldData::class, []),
        public bool $is_active = false,
        public ?OrganizationData $organization = null,
        public string $created_at,
        public string $updated_at
    ) {}

    public static function fromModel(Template $template): self
    {
        return new self(
            $template->slug,
            $template->name,
            $template->description,
            $template->category->description,
            $template->kind->description,
            $template->source,
            $template->version,
            # need to update [] to have mock values
            $template->form ? new DataCollection(FieldData::class, $template->form) : new DataCollection(FieldData::class, []),
            $template->is_active,
            $template->relationLoaded('organization') ? OrganizationData::collect($template->organization) : null, // Include org if loaded
            $template->created_at->toDateTimeString(),
            $template->updated_at->toDateTimeString()
        );
    }
}
