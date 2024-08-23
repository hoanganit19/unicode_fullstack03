<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
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

    public function create()
    {
        $users = User::all();
        return view('posts.create', compact('users'));
    }

    public function store(Request $request)
    {
        $title = $request->title;
        $content = $request->content;
        $userId = $request->user_id;
        $user = User::find($userId);
        $post = new Post([
            'title' => $title,
            'content' => $content,
        ]);
        $user->posts()->save($post);
        return redirect('/posts');
    }
}
