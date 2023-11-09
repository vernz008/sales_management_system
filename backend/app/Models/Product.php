<?php

namespace App\Models;

use App\Models\Category;
use App\Models\Supplier;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $table = 'products';
    protected $fillable = [
        'name',
        'description',
        'price',
        'category_id',
        'supplier_id'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class,"category_id");
    }

    public function supplier()
    {
        return $this->belongsTo(Supplier::class,"supplier_id");
    }

}