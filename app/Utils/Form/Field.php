<?php

namespace App\Utils\Form;

abstract class Field
{
    public string $id;
    public string $type;
    public string $label;
    public string $description;
    public ?array $validation;
    public ?string $condition;
    public ?bool $inCode;

    public function __construct(object $field)
    {
        $this->id = $field->id;
        $this->type = $field->type;
        $this->label = $field->label;
        $this->description = $field->description;
        $this->validation = $field->validation ?? [];
        $this->condition = $field->condition ?? "true";
        $this->inCode = $field->inCode ?? true;
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'type' => $this->type,
            'label' => $this->label,
            'description' => $this->description,
            'validation' => $this->validation,
            'condition' => $this->condition,
            'inCode' => $this->inCode,
        ];
    }

}
