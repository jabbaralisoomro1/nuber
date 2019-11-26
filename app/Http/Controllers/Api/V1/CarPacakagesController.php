<?php

namespace App\Http\Controllers\Api\V1;

use App\CarPacakage;
use App\Http\Controllers\Controller;
use App\Http\Resources\CarPacakage as CarPacakageResource;
use App\Http\Requests\Admin\StoreCarPacakagesRequest;
use App\Http\Requests\Admin\UpdateCarPacakagesRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;



class CarPacakagesController extends Controller
{
    public function index()
    {
        

        return new CarPacakageResource(CarPacakage::with([])->get());
    }

    public function show($id)
    {
        if (Gate::denies('car_pacakage_view')) {
            return abort(401);
        }

        $car_pacakage = CarPacakage::with([])->findOrFail($id);

        return new CarPacakageResource($car_pacakage);
    }

    public function store(StoreCarPacakagesRequest $request)
    {
        if (Gate::denies('car_pacakage_create')) {
            return abort(401);
        }

        $car_pacakage = CarPacakage::create($request->all());
        
        

        return (new CarPacakageResource($car_pacakage))
            ->response()
            ->setStatusCode(201);
    }

    public function update(UpdateCarPacakagesRequest $request, $id)
    {
        if (Gate::denies('car_pacakage_edit')) {
            return abort(401);
        }

        $car_pacakage = CarPacakage::findOrFail($id);
        $car_pacakage->update($request->all());
        
        
        

        return (new CarPacakageResource($car_pacakage))
            ->response()
            ->setStatusCode(202);
    }

    public function destroy($id)
    {
        if (Gate::denies('car_pacakage_delete')) {
            return abort(401);
        }

        $car_pacakage = CarPacakage::findOrFail($id);
        $car_pacakage->delete();

        return response(null, 204);
    }
}
