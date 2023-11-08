<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $customer = Customer::all();

            if ($customer->count() > 0){
                return response()->json($customer,200);
            }else{
                return response()->json("No customers found", 404);
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
                "name" => "required",
                "email" => "required|email",
                "address" => "required",
            ]);
            $customer = new Customer();
            $customer->name = $request->name;
            $customer->email = $request->email;
            $customer->address = $request->address;
            $customer->save();

            return response()->json($customer, 201);
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
            $customer = Customer::find($id);

            if ($customer){
                return response()->json($customer, 200);
            }else{
                return response()->json("Customer not found", 404);
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
            $customer = Customer::find($id);
            $customer->name = $request->name;
            $customer->email = $request->email;
            $customer->address = $request->address;
            $customer->save();

            return response()->json($customer, 200);
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
            $customer = Customer::find($id);
            $customer->delete();

            $updated_customer = Customer::all();

            return response()->json($updated_customer, 200);
        } catch (\Throwable $error) {
            throw $error;
        }
    }
}