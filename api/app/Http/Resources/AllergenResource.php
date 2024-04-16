<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AllergenResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this -> id,
            'alrgnName' => $this -> alrgnName,
            'alrgnColor' => $this -> alrgnColor,
            'alrgnImg' => $this -> alrgnImg
        ];
    }
}
