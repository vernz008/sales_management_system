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
        
        if (count($customer) > 0){
            return response()->json($customer,200);
        }else{
            return response()->json(['message' => "Customer Table is Empty"],404);
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
                'name' =>'required',
                'email' =>'required',
                'address' =>'required',
            ]);
            
            $customer = Customer::create([
                'name' => $request->name,
                'email' => $request->email,
                'address' => $request->address,
            ]);

            if($customer){

                $customer_list = Customer::all();
                
                return response()->json($customer_list, 201);
                
            }else{
                return response()->json("Failed to Add", 500);
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
            $customer = Customer::find($id);

            if ($customer) {

                return response()->json($customer, 200);
            } else {
                return response()->json(['message' => 'Customer not found'], 404);
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
                'email' =>'required',
                'address' =>'required',
            ]);

            $customer = Customer::find($id);

            if ($customer) {
                $customer->name = $request->name;
                $customer->email = $request->email;
                $customer->address = $request->address;
                $customer->save();

                $customer_update = Customer::find($id);

                return response()->json($customer_update, 200);
            } else {
                return response()->json(['message' => 'Customer not found'], 404);
            }
        } catch (\Throwable $th) {
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

            if ($customer) {
                $customer->delete();

                $all_customer = Customer::all();

                return response()->json($all_customer, 200);
            } else {
                return response()->json(['message' => 'Customer not found'], 404);
            }
        } catch (\Throwable $error) {
            throw $error;
        }
    }
}