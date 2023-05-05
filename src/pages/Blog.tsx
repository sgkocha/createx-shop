import React from 'react'
import Styles from './Blog.module.css'

const Blog = () => {
    return (
        <main>
            <div className={Styles.blog_wr}>
                <div>
                    <h2 className={Styles.blog_title}>Fashion Blog</h2>
                    <div className={Styles.blog_content_box}>
                        <div className={Styles.blog_content_item}>
                            <div><img src="images/blog1.png" alt="blog1" /></div>
                            <div className={Styles.content_item_info}>
                                <div className={Styles.content_item_cat}>Fashion</div>
                                <div className={Styles.content_item_date}>August 24, 2020</div>
                                <div className={Styles.content_item_comments}>No comments</div>
                            </div>
                            <h3 className={Styles.content_item_title}>Bag Trends for Summer 2020</h3>
                            <p className={Styles.content_item_desc}>
                                Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio.
                                Interdum aenean sit viverra amet,malesuada ornare sed gravida rhoncus, congue.
                                Purus auctor nullam diam quis est hendrerit ac euismod...
                            </p>
                        </div>
                        <div className={Styles.blog_content_item}>
                            <div><img src="images/blog2.png" alt="blog2" /></div>
                            <div className={Styles.content_item_info}>
                                <div className={Styles.content_item_cat}>Celebrity style</div>
                                <div className={Styles.content_item_date}>August 5, 2020</div>
                                <div className={Styles.content_item_comments}>No comments</div>
                            </div>
                            <h3 className={Styles.content_item_title}>Wardrobe Essentials Everyone Should Own Today</h3>
                            <p className={Styles.content_item_desc}>
                                Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi interdum blandit.
                                Tellus sed morbi massa quis sed. Faucibus tincidunt magna enim ultricies fringilla at rhoncus, hac...
                            </p>
                        </div>
                        <div className={Styles.blog_content_item}>
                            <div><img src="images/blog3.png" alt="blog3" /></div>
                            <div className={Styles.content_item_info}>
                                <div className={Styles.content_item_cat}>Lifestyle</div>
                                <div className={Styles.content_item_date}>July 16, 2020</div>
                                <div className={Styles.content_item_comments}>4 comments</div>
                            </div>
                            <h3 className={Styles.content_item_title}>Top 10 of This Season’s Hottest Sneakers</h3>
                            <p className={Styles.content_item_desc}>
                                Sollicitudin et nec congue magna quis commodo quis luctus risus. Dolor, dignissim semper
                                faucibus quisque massa ut enim. Turpis viverra mattis semper pellentesque facilisis.
                                Ut id eget sagittis lectus...
                            </p>
                        </div>
                        <div className={Styles.blog_content_item}>
                            <div><img src="images/blog4.png" alt="blog4" /></div>
                            <div className={Styles.content_item_info}>
                                <div className={Styles.content_item_cat}>Fashion</div>
                                <div className={Styles.content_item_date}>July 2, 2020</div>
                                <div className={Styles.content_item_comments}>2 comments</div>
                            </div>
                            <h3 className={Styles.content_item_title}>Modern Accessories 2020: Why Simple Isn't Easy</h3>
                            <p className={Styles.content_item_desc}>
                                Tellus sed morbi massa quis sed. Faucibus tincidunt magna enim ultricies fringilla
                                at rhoncus, hac. Sollicitudin et nec congue magna quis commodo quis luctus risus.
                                Dolor, dignissim semper faucibus quisque massa ut enim...
                            </p>
                        </div>
                    </div>
                    <div className={Styles.blog_controls}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div><img src="images/arrow-right.png" alt="arrow-right" /></div>
                    </div>
                </div>
                <div className={Styles.blog_menu}>
                    <div className={Styles.blog_menu_item}>
                        <form className={Styles.blog_menu_fm}>
                            <input type="text" name='query' placeholder='Search the blog...' />
                            <button><img src="images/search.png" alt="search" /></button>
                        </form>
                    </div>
                    <div className={Styles.blog_menu_item}>
                        <h3 className={Styles.menu_item_title}>Blog Categories</h3>
                        <div className={Styles.blog_menu_categories}>
                            <div className={Styles.menu_categories_item}>
                                <div className={Styles.menu_categories_name}>All</div>
                                <div className={Styles.menu_categories_count}>23</div>
                            </div>
                            <div className={Styles.menu_categories_item}>
                                <div className={Styles.menu_categories_name}>Fashion</div>
                                <div className={Styles.menu_categories_count}>3</div>
                            </div>
                            <div className={Styles.menu_categories_item}>
                                <div className={Styles.menu_categories_name}>Designers</div>
                                <div className={Styles.menu_categories_count}>7</div>
                            </div>
                            <div className={Styles.menu_categories_item}>
                                <div className={Styles.menu_categories_name}>Lifestyle</div>
                                <div className={Styles.menu_categories_count}>4</div>
                            </div>
                            <div className={Styles.menu_categories_item}>
                                <div className={Styles.menu_categories_name}>Celebrity style</div>
                                <div className={Styles.menu_categories_count}>9</div>
                            </div>
                        </div>

                    </div>
                    <div className={Styles.blog_menu_item}>
                        <h3 className={Styles.menu_item_title}>Featured Posts</h3>
                        <div className={Styles.menu_posts}>
                            <div className={Styles.menu_posts_item}>
                                <div><img src="images/featured1.png" alt="featured1" /> </div>
                                <div>
                                    <div className={Styles.menu_posts_date}>July 5, 2020</div>
                                    <div className={Styles.menu_posts_title}>14 Items From End-of-Spring Sales Are Sure to Spark Joy</div>
                                </div>
                            </div>
                            <div className={Styles.menu_posts_item}>
                                <div><img src="images/featured2.png" alt="featured2" /> </div>
                                <div>
                                    <div className={Styles.menu_posts_date}>April 9, 2020</div>
                                    <div className={Styles.menu_posts_title}>Best Fashion Instagrams of the Week</div>
                                </div>
                            </div>
                            <div className={Styles.menu_posts_item}>
                                <div><img src="images/featured3.png" alt="featured3" /> </div>
                                <div>
                                    <div className={Styles.menu_posts_date}>March 12, 2020</div>
                                    <div className={Styles.menu_posts_title}>Top 10 Looks from the Venice Film Festival</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.blog_menu_item}>
                        <h3 className={Styles.menu_item_title}>Tags</h3>
                        <div className={Styles.menu_tags}>
                            <button>#trends</button>
                            <button>#inspiration</button>
                            <button>#designers</button>
                            <button>#kidsfashion</button>
                            <button>#streetstyle</button>
                            <button>#models</button>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Blog