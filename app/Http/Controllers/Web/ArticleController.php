<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Resources\ArticleCollection;
use Illuminate\Support\Facades\Auth;
use App\Models\Article;
use App\Models\Category;
use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $article = new ArticleCollection(Article::OrderByDesc('updated_at')->paginate(9));
        //dd($article);
        return Inertia::render('Homepage', [
            'article' => $article
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $categories = Category::with('user')->get();

        return Inertia::render('articles.create', [
            'categories' => $categories
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $user_id = Auth::id();
        //dd($request);
        $file = $request->hasFile('image');
        if ($file) {

            $this->validate($request, [
                'title'         => 'required',
                'content'      => 'required',
                'image'         => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'category'   => 'required|integer',
            ]);

            $image = $request->file('image')->store('article-images');

            Article::create([
                'title'         => $request->title,
                'content'      => $request->content,
                'image'         => $image,
                'user_id'       => $user_id,
                'category_id'   => $request->category,
            ]);
        } else {

            $this->validate($request, [
                'title'         => 'required',
                'content'      => 'required',
                'category'   => 'required|integer',
            ]);

            Article::create([
                'title'         => $request->title,
                'content'      => $request->content,
                'user_id'       => $user_id,
                'category_id'   => $request->category,
            ]);
        }

        return redirect()->route('dashboard')->with('message', 'Article has been Created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function show(Article $article)
    {
        $user_id = Auth::id();
        $articles = Article::with('user', 'category')
            ->where('user_id', $user_id)->OrderByDesc('id')
            ->get();
        $categories = Category::with('user')
            ->where('user_id', $user_id)
            ->get();

        return Inertia::render('Dashboard', [
            'userArticle' => $articles,
            'userCategories' => $categories
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function edit(Article $article, Request $request)
    {
        $user_id = Auth::id();
        $articles = Article::with('user', 'category')
            ->where('user_id', $user_id)->OrderByDesc('id')
            ->get();
        $categories = Category::with('user')
            ->where('user_id', $user_id)
            ->get();

        return Inertia::render('Dashboard', [
            'userArticle' => $articles,
            'userCategories' => $categories,
            'needUpdates' => $articles->find($request->id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Article $article)
    {
        $user_id = Auth::id();
        $file = $request->hasFile('image');

        if ($file) {

            if ($article->image) {
                Storage::delete($article->image);
            }

            $this->validate($request, [
                'title'         => 'required',
                'content'      => 'required',
                'image'         => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
                'category'   => 'required',
            ]);

            $image = $request->file('image')->store('article-images');

            Article::where('id', $request->id)
                ->update([
                    'title'         => $request->title,
                    'content'      => $request->content,
                    'image'         => $image,
                    'user_id'       => $user_id,
                    'category_id'   => $request->category,
                ]);
        } else {

            $this->validate($request, [
                'title'         => 'required',
                'content'      => 'required',
                'category'   => 'required',
            ]);

            Article::where('id', $request->id)
                ->update([
                    'title'         => $request->title,
                    'content'      => $request->content,
                    'user_id'       => $user_id,
                    'category_id'   => $request->category,
                ]);
        }

        return redirect()->route('dashboard')->with('message', 'Article`s has been Updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Article  $article
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        Article::find($request->id)->delete();

        return redirect()->route('dashboard')->with('messages', 'Your article has been deleted');
    }
}
