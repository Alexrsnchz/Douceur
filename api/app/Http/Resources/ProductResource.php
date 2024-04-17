<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
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
            'prodName' => $this -> prodName,
            'description' => $this -> description,
            'price' => $this -> price,
            'availability' => $this -> availability,
            'image' => $this -> image,
            'category_id' => $this -> category_id
        ];
    }
}
