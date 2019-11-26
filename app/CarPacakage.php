<?php
namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * Class CarPacakage
 *
 * @package App
 * @property string $name
 * @property decimal $price
*/
class CarPacakage extends Model
{
    use SoftDeletes;

    
    protected $fillable = ['name', 'price'];
    

    public static function storeValidation($request)
    {
        return [
            'name' => 'max:191|required',
            'price' => 'numeric|nullable'
        ];
    }

    public static function updateValidation($request)
    {
        return [
            'name' => 'max:191|required',
            'price' => 'numeric|nullable'
        ];
    }

    

    
    
    
}
