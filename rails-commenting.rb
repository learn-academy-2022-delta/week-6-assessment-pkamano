# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# This is creating an index method in the controller of the model "Blog Post"
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # @posts is an instance variable that is for all of the blog posts that will be made (BlogPosts.all). 
    @posts = BlogPost.all
  end

  # ---3)
  # The show method is being created. Each individual post, represented by the instance variable @post, can be recalled and displayed when the correct parameters are entered (:id).
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # The new method is being created in the controller. Each new individual post is represented by the instance variable @post.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) The create method is being created in the controller. When an individual post is being created, certain parameters have to be met. Those parameters are defined as blog_post_params. If the post meets the specified params then the user will be redirected to the blog_post_path (assuming that is the main page if an alias of 'blog_post' was made for the index or new controller method/route.) If the specified parameters are not met then the user will be redirected to the new_blog_post_path. That will be whatver controller method/route was given the alias of 'new_blog_post'.
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6)
    # The edit method follows specified parameters (:id) in order for it to be located in the table (.find). After the specific entry is found, then it can be updated. The params also need to match when locating an entry to update (:id).
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # To update the entry, it has to meet the blog_post_params which were initially declared in the create method and specified in the strong params (below). If those blog_post_params are met then the user will be redirected to the post that was just edited/ updated. If the params were not met then the user will be redirected to the page where the individual post can be edited. The destroy method needs specified params as well. If the individual post meets those params and is successfully deleted then the user will get redirected to the main page where all the posts are listed. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8)
      # If the post is not deleted correctly, then the user will be redirected to that individual post to show that it is still there and was not deleted. 
      redirect_to blog_post_path(@post)
    end
  end

  # ---9)
  # This is where strong params are set in order to add a level of security so the database cannot be manipulated with erroneous data. The strong params are the blog_post_params which were initially declared in the create method above.
  private
  def blog_post_params
    # ---10)
    # The strong params required for each blog_post are a title and content. These are the only parameters that will be permitted when making a new post. Any else will redirect the user to the blog_post page.
    params.require(:blog_post).permit(:title, :content)
  end
end
