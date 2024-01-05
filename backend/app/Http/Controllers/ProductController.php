<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $products = Product::with(["supplier","category"])->get();
            $mappedProducts = $products->map(function ($data) {
                return [
                    'id' => $data->id,
                    'product_name' => $data->name,
                    'description' => $data->description,
                    'price' => $data->price,
                    'supplier' => $data->supplier->company_name,
                    'category' => $data->category->name,
                ];
            });

            return $mappedProducts;
       
            // return response()->json($mapped_products,200);

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
                'name' =>'required',
                'description' =>'required',
                'price' =>'required',
                'category_id' =>'required',
              'supplier_id' =>'required'
            ]);
            
            $product = new Product();
            $product->name = $request->name;
            $product->description = $request->description;
            $product->price = $request->price;
            $product->category_id = $request->category_id;
            $product->supplier_id = $request->supplier_id;
            $product->save();

            if ($product){
                return response()->json($product, 201);
            }else{
                return response()->json([
                  'message' => 'Product not created'
                ], 404);
            }
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
        try {
            $product = Product::with(['category', 'supplier'])->find($id);

                    $product_data =  [
                        'id' => $product->id,
                        'product_name' => $product->name,
                        'description' => $product->description,
                        'price' => $product->price,
                        'supplier' => $product->supplier->company_name,
                        'category' => $product->category->name,
                    ];
            
                return response()->json($product_data, 200);
            
        } catch (\Throwable $error) {
            throw $error;
        }
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