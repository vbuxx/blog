<?php

use App\Http\Controllers\Web\ArticleController;
use App\Http\Controllers\Web\CategoryController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [ArticleController::class, 'index'])->name('homepage');
Route::get('/test', function () {
    return Inertia::render('Test');
})->name('test');


Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/article', [ArticleController::class, 'show'])->name('my.article');
    Route::post('/article', [ArticleController::class, 'store'])->name('create.article');
    Route::post('/article/update', [ArticleController::class, 'update'])->middleware(['auth', 'verified'])->name('update.article');
    Route::get('/article/edit', [ArticleController::class, 'edit'])->middleware(['auth', 'verified'])->name('edit.article');
    Route::post('/article/delete', [ArticleController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete.article');
    Route::post('/category', [CategoryController::class, 'store'])->name('create.category');
    Route::post('/category/update', [CategoryController::class, 'update'])->name('update.category');
    Route::post('/category/delete', [CategoryController::class, 'destroy'])->middleware(['auth', 'verified'])->name('delete.category');
    Route::get('/dashboard', [ArticleController::class, 'show'])->name('dashboard');
});



require __DIR__ . '/auth.php';
