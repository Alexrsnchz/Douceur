<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'password',
        'email',
        'address_id',
        'role'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Relación N:M con Product.
     * Un usuario puede dar like a muchos productos.
     */
    public function productsLike(): BelongsToMany
    {
        return $this -> belongsToMany(Product::class);
    }

    /**
     * Relación 1:M con Address.
     * Un usuario puede tener una sola dirección.
     */
    public function address(): BelongsTo
    {
        return $this -> belongsTo(Address::class);
    }

    /**
     * Relación 1:N con Post.
     * Un usuario puede tener muchos posts.
     */
    public function posts(): HasMany
    {
        return $this -> hasMany(Post::class);
    }

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
