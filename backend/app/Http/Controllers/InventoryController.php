<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;


class InventoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $products = Product::with('inventory', 'category', 'supplier')
            ->join('inventories', 'products.id', '=', 'inventories.product_id')
            ->join('categories', 'products.category_id', '=', 'categories.id')
            ->join('suppliers', 'products.supplier_id', '=', 'suppliers.id')
            ->select('products.id', 'products.name', 'products.description', 'products.price', 'inventories.stock', 'categories.name as category_name', 'suppliers.company_name as supplier_name')
            ->get();
    
        return $products;
            // $inventory = Inventory::all();
            // $products = Product::with(["supplier","category"])->get();

            // $mappedProducts = $products->map(function ($data) use ($inventory) {
            //     $stock = $inventory->where('product_id', $data->id)->first();
        
            //     return [
            //         'id' => $data->id,
            //         'product_name' => $data->name,
            //         'description' => $data->description,
            //         'price' => $data->price,
            //         "stock" => $stock ? $stock->stock : 0 ,
            //         'supplier' => $data->supplier->company_name,
            //         'category' => $data->category->name,
            //     ];
            // });
        
            // return [$mappedProducts];
            
        } catch (\Exception $error) {

            throw $error;
        }
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $request->validate([
                "product_id" => "required|integer",
                "stock" => "required|integer",
            ]);

            
            $inventory = Inventory::create([
                "product_id"=>$request->input("product_id"),
                "stock"=>$request->input("stock")
            ]);

            return response()->json($inventory,201);
        } catch (\Throwable $error) {
            throw $error;
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}