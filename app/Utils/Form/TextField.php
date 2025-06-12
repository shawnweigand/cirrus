<?php

namespace App\Utils\Form;

class TextField extends Field
{
    public ?string $default;

    public function __construct(object $field)
    {
        parent::__construct($field);

        $this->default = $field->default ?? null;
    }

    public function toArray(): array
    {
        return array_merge(parent::toArray(), [
            'default' => $this->default,
        ]);
    }
}