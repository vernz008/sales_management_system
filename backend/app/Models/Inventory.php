<?php

namespace App\Models;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    use HasFactory;
    protected $table = "inventories";
    protected $fillable = [
        'product_id', 
        'stock'
    ];

    // public function product()
    // {
    //     return $this->belongsTo(Product::class,"product_id");
    // }

}