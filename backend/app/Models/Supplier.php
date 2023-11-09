<?php

namespace App\Models;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    use HasFactory;
    protected $table ='suppliers';
    protected $fillable = ['company_name', 'phone', 'address'];

    public function products()
{
    return $this->hasMany(Product::class);
}

}