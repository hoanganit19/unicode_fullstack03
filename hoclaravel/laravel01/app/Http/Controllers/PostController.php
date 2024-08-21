<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::with('user')->orderBy('id', 'desc')->get();
        return view('posts.index', compact('posts'));
    }
    public function view(Post $post)
    {
        return view('posts.view', compact('post'));
    }
}