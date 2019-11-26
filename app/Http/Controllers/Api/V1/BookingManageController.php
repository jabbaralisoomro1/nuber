<?php

namespace App\Http\Controllers\Api\V1;

use App\Booking;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;
use App\Http\Resources\Booking as BookingResource;
use App\Http\Requests\Admin\StoreBookingsRequest;
use App\Http\Requests\Admin\UpdateBookingsRequest;

use Illuminate\Support\Facades\Gate;




class BookingManageController extends Controller
{
    //

    function cancelBooking($id ){
       $booking= Booking::find($id);
       $booking->status_id=3;
        $booking->save();
        return (new BookingResource($booking))
            ->response()
            ->setStatusCode(202);
    }

    function acceptBooking($id ){
        $booking= Booking::find($id);
        $booking->status_id=2;
        $booking->save();
        return (new BookingResource($booking))
            ->response()
            ->setStatusCode(202);
    }
}
