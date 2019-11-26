<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class Booking
 *
 * @package App
 * @property string $name
 * @property string $email
 * @property string $package
 * @property string $status
*/
class Booking extends Model
{
    use SoftDeletes;

    
    protected $fillable = ['name', 'email', 'package_id', 'status_id','reference_number'];
    

    public static function storeValidation($request)
    {
        return [
            'name' => 'max:191|required',
            'email' => 'email|max:191|nullable',
            'package_id' => 'integer|exists:car_pacakages,id|max:4294967295|required',
            'status_id' => 'integer|exists:booking_statuses,id|max:4294967295|nullable'
        ];
    }

    public static function updateValidation($request)
    {
        return [
            'name' => 'max:191|required',
            'email' => 'email|max:191|nullable',
            'package_id' => 'integer|exists:car_pacakages,id|max:4294967295|required',
            'status_id' => 'integer|exists:booking_statuses,id|max:4294967295|nullable'
        ];
    }

    

    
    
    public function package()
    {
        return $this->belongsTo(CarPacakage::class, 'package_id')->withTrashed();
    }
    
    public function status()
    {
        return $this->belongsTo(BookingStatus::class, 'status_id')->withTrashed();
    }
    
    
}
