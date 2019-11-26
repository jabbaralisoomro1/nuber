<?php

namespace App\Http\Controllers\Api\V1;

use App\Booking;
use App\Http\Controllers\Controller;
use App\Http\Resources\Booking as BookingResource;
use App\Http\Requests\Admin\StoreBookingsRequest;
use App\Http\Requests\Admin\UpdateBookingsRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;



class BookingsController extends Controller
{
    public function index()
    {
        

        return new BookingResource(Booking::with(['package', 'status'])->get());
    }

    public function show($id)
    {
        if (Gate::denies('booking_view')) {
            return abort(401);
        }

        $booking = Booking::with(['package', 'status'])->findOrFail($id);

        return new BookingResource($booking);
    }

    public function store(StoreBookingsRequest $request)
    {
        if (Gate::denies('booking_create')) {
            return abort(401);
        }

        $book=$request->all();
        $book['status_id']=1;
        $book['reference_number']=uniqid();
        $booking = Booking::create($book);
        
        

        return (new BookingResource($booking))
            ->response()
            ->setStatusCode(201);
    }

    public function update(UpdateBookingsRequest $request, $id)
    {
        if (Gate::denies('booking_edit')) {
            return abort(401);
        }

        $booking = Booking::findOrFail($id);
        $booking->update($request->all());
        
        
        

        return (new BookingResource($booking))
            ->response()
            ->setStatusCode(202);
    }

    public function destroy($id)
    {
        if (Gate::denies('booking_delete')) {
            return abort(401);
        }

        $booking = Booking::findOrFail($id);
        $booking->delete();

        return response(null, 204);
    }
}
