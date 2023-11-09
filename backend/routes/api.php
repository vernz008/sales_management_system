<?php

use App\Http\Controllers\CustomerController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\InventoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Customer routes
Route::get('customer', [CustomerController::class, "index"]);
Route::post('customer', [CustomerController::class, "store"]);
Route::get('customer/{id}', [CustomerController::class, "show"]);
Route::put('customer/{id}', [CustomerController::class, "update"]);
Route::delete('customer/{id}', [CustomerController::class, "destroy"]);

//Category routes
Route::get('category', [CategoryController::class, "index"]);
Route::post('category', [CategoryController::class, "store"]);
Route::get('category/{id}', [CategoryController::class, "show"]);
Route::put('category/{id}', [CategoryController::class, "update"]);
Route::delete('category/{id}', [CategoryController::class, "destroy"]);

//Supplier routes
Route::get('supplier', [SupplierController::class, "index"]);
Route::post('supplier', [SupplierController::class, "store"]);
Route::get('supplier/{id}', [SupplierController::class, "show"]);
Route::put('supplier/{id}', [SupplierController::class, "update"]);
Route::delete('supplier/{id}', [SupplierController::class, "destroy"]);

//Product routes
Route::get('product', [ProductController::class, "index"]);
Route::post('product', [ProductController::class, "store"]);
Route::get('product/{id}', [ProductController::class, "show"]);
Route::put('product/{id}', [ProductController::class, "update"]);
Route::delete('product/{id}', [ProductController::class, "destroy"]);

//Inventory routes
Route::get('inventory', [InventoryController::class, "index"]);
Route::post('inventory', [InventoryController::class, "store"]);