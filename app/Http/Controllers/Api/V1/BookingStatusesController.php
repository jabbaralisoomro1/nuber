<?php

namespace App\Http\Controllers\Api\V1;

use App\BookingStatus;
use App\Http\Controllers\Controller;
use App\Http\Resources\BookingStatus as BookingStatusResource;
use App\Http\Requests\Admin\StoreBookingStatusesRequest;
use App\Http\Requests\Admin\UpdateBookingStatusesRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Gate;



class BookingStatusesController extends Controller
{
    public function index()
    {
        

        return new BookingStatusResource(BookingStatus::with([])->get());
    }

    public function show($id)
    {
        if (Gate::denies('booking_status_view')) {
            return abort(401);
        }

        $booking_status = BookingStatus::with([])->findOrFail($id);

        return new BookingStatusResource($booking_status);
    }

    public function store(StoreBookingStatusesRequest $request)
    {
        if (Gate::denies('booking_status_create')) {
            return abort(401);
        }

        $booking_status = BookingStatus::create($request->all());
        
        

        return (new BookingStatusResource($booking_status))
            ->response()
            ->setStatusCode(201);
    }

    public function update(UpdateBookingStatusesRequest $request, $id)
    {
        if (Gate::denies('booking_status_edit')) {
            return abort(401);
        }

        $booking_status = BookingStatus::findOrFail($id);
        $booking_status->update($request->all());
        
        
        

        return (new BookingStatusResource($booking_status))
            ->response()
            ->setStatusCode(202);
    }

    public function destroy($id)
    {
        if (Gate::denies('booking_status_delete')) {
            return abort(401);
        }

        $booking_status = BookingStatus::findOrFail($id);
        $booking_status->delete();

        return response(null, 204);
    }
}
