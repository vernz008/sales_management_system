<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $categories = Category::all();
            
            if (count($categories) > 0) {

                $listofCategories = Category::all();
                return response()->json($listofCategories, 200);
            } else {
                return response()->json(['message' => 'No categories found'], 404);
            }
        } catch (\Throwable $error) {
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
                'name' => ['required','string','max:255']
            ]);
            $category = Category::create($request->all());

            if ($category) {
                return response()->json($category, 201);
            } else {
                return response()->json(['message' => 'Category not created'], 404);
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
            $category = Category::find($id);
            if (!$category) {
                return response()->json(['message' => 'Category not found'], 404);
            }else{

                return response()->json($category, 200);
            }
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
        try {
            $request->validate([
                'name' =>'required',
            ]);

            $category = Category::find($id);

            if ($category) {
                $category->name = $request->name;
                $category->save();

                $category_update = Category::find($id);

                return response()->json($category_update, 200);
            } else {
                return response()->json(['message' => 'Category not found'], 404);
            }
        } catch (\Throwable $error) {
            throw $error;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $category = Category::find($id);

            if ($category) {
                $category->delete();

                $all_category = Category::all();

                return response()->json($all_category, 200);
            } else {
                return response()->json(['message' => 'Category not found'], 404);
            }
        } catch (\Throwable $error) {
            throw $error;
        }
    }
}