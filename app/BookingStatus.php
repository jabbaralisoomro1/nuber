<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class BookingStatus
 *
 * @package App
 * @property string $name
*/
class BookingStatus extends Model
{
    use SoftDeletes;

    
    protected $fillable = ['name'];
    

    public static function storeValidation($request)
    {
        return [
            'name' => 'max:191|required'
        ];
    }

    public static function updateValidation($request)
    {
        return [
            'name' => 'max:191|required'
        ];
    }

    

    
    
    
}
