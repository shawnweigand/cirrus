<?php

namespace App\Data;

use App\Models\Submission;
use Spatie\LaravelData\Data;

class SubmissionData extends Data
{
    public function __construct(
        public int $user_id,
        public int $template_id,
        public array $values,
        public string $status,
    ) {}

    public static function fromModel(Submission $submission): self
    {
        return new self(
            $submission->user_id,
            $submission->template_id,
            $submission->values,
            $submission->status,
        );
    }
}
