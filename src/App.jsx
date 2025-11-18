import React, { useState, useEffect } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import './App.css';

// Collection of quotes across different categories
const initialQuoteCategories = {
  motivation: [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The will to win, the desire to succeed, the urge to reach your full potential - these are the keys that will unlock the door to personal excellence. - Confucius",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "Opportunities don't happen. You create them. - Chris Grosser",
    "Try not to become a man of success. Rather become a man of value. - Albert Einstein",
    "The way get started is to quit talking and begin doing. - Walt Disney",
    "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty. - Winston Churchill",
    "Don't let yesterday take up too much of today. - Will Rogers",
    "You learn more from failure than from success. Don't let it stop you. Failure builds character. - Unknown",
    "If you are working on something that you really care about, you don't have to be pushed. The vision pulls you. - Steve Jobs",
    "People who are crazy enough to think they can change the world, are the ones who do. - Rob Siltanen",
    "Failure will never overtake me if my determination to succeed is strong enough. - Og Mandino",
    "We may encounter many defeats but we must not be defeated. - Maya Angelou",
    "Knowing is not enough; we must apply. Wishing is not enough; we must do. - Johann Wolfgang von Goethe",
    "The secret of success is to do the common thing uncommonly well. - John D. Rockefeller Jr.",
    "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere. - Barack Obama",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "The successful warrior is the average man with laser-like focus. - Bruce Lee",
    "The difference between ordinary and extraordinary is that little extra. - Jimmy Johnson",
    "The harder the conflict, the more glorious the triumph. - Thomas Paine",
    "I never dreamed about success, I worked for it. - Estee Lauder",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "Go confidently in the direction of your dreams. Live the life you have imagined. - Henry David Thoreau",
    "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me. - Erma Bombeck",
    "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him. - Booker T. Washington",
    "Certain things catch your eye, but pursue only those that capture the heart. - Ancient Indian Proverb",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
    "The only thing you absolutely have to know is the location of the library. - Albert Einstein",
    "Everything you've ever wanted is on the other side of fear. - George Addair",
    "Either you run the day, or the day runs you. - Jim Rohn",
    "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. - Norman Vincent Peale",
    "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
    "The best revenge is massive success. - Frank Sinatra",
    "People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily. - Zig Ziglar",
    "Life shrinks or expands in proportion to one's courage. - Anais Nin",
    "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced. - Vincent Van Gogh",
    "There is only one way to avoid criticism: do nothing, say nothing, and be nothing. - Aristotle",
    "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you. - Jesus",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge. - Stephen Hawking",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "Go confidently in the direction of your dreams. Live the life you have imagined. - Henry David Thoreau",
    "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me. - Erma Bombeck",
    "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him. - Booker T. Washington",
    "Certain things catch your eye, but pursue only those that capture the heart. - Ancient Indian Proverb",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
    "The only thing you absolutely have to know is the location of the library. - Albert Einstein",
    "Everything you've ever wanted is on the other side of fear. - George Addair",
    "Either you run the day, or the day runs you. - Jim Rohn",
    "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. - Norman Vincent Peale",
    "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
    "The best revenge is massive success. - Frank Sinatra",
    "People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily. - Zig Ziglar",
    "Life shrinks or expands in proportion to one's courage. - Anais Nin",
    "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced. - Vincent Van Gogh",
    "There is only one way to avoid criticism: do nothing, say nothing, and be nothing. - Aristotle",
    "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you. - Jesus",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge. - Stephen Hawking",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "Go confidently in the direction of your dreams. Live the life you have imagined. - Henry David Thoreau",
    "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me. - Erma Bombeck",
    "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him. - Booker T. Washington",
    "Certain things catch your eye, but pursue only those that capture the heart. - Ancient Indian Proverb",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
    "The only thing you absolutely have to know is the location of the library. - Albert Einstein",
    "Everything you've ever wanted is on the other side of fear. - George Addair",
    "Either you run the day, or the day runs you. - Jim Rohn",
    "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. - Norman Vincent Peale",
    "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
    "The best revenge is massive success. - Frank Sinatra",
    "People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily. - Zig Ziglar",
    "Life shrinks or expands in proportion to one's courage. - Anais Nin",
    "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced. - Vincent Van Gogh",
    "There is only one way to avoid criticism: do nothing, say nothing, and be nothing. - Aristotle",
    "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you. - Jesus",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge. - Stephen Hawking",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "Go confidently in the direction of your dreams. Live the life you have imagined. - Henry David Thoreau",
    "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me. - Erma Bombeck",
    "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him. - Booker T. Washington",
    "Certain things catch your eye, but pursue only those that capture the heart. - Ancient Indian Proverb",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
    "The only thing you absolutely have to know is the location of the library. - Albert Einstein",
    "Everything you've ever wanted is on the other side of fear. - George Addair",
    "Either you run the day, or the day runs you. - Jim Rohn",
    "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. - Norman Vincent Peale",
    "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
    "The best revenge is massive success. - Frank Sinatra",
    "People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily. - Zig Ziglar",
    "Life shrinks or expands in proportion to one's courage. - Anais Nin",
    "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced. - Vincent Van Gogh",
    "There is only one way to avoid criticism: do nothing, say nothing, and be nothing. - Aristotle",
    "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you. - Jesus",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge. - Stephen Hawking",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "Go confidently in the direction of your dreams. Live the life you have imagined. - Henry David Thoreau",
    "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me. - Erma Bombeck",
    "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him. - Booker T. Washington",
    "Certain things catch your eye, but pursue only those that capture the heart. - Ancient Indian Proverb",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
    "The only thing you absolutely have to know is the location of the library. - Albert Einstein",
    "Everything you've ever wanted is on the other side of fear. - George Addair",
    "Either you run the day, or the day runs you. - Jim Rohn",
    "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. - Norman Vincent Peale",
    "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
    "The best revenge is massive success. - Frank Sinatra",
    "People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily. - Zig Ziglar",
    "Life shrinks or expands in proportion to one's courage. - Anais Nin",
    "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced. - Vincent Van Gogh",
    "There is only one way to avoid criticism: do nothing, say nothing, and be nothing. - Aristotle",
    "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you. - Jesus",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge. - Stephen Hawking",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats",
    "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
    "Go confidently in the direction of your dreams. Live the life you have imagined. - Henry David Thoreau",
    "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me. - Erma Bombeck",
    "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him. - Booker T. Washington",
    "Certain things catch your eye, but pursue only those that capture the heart. - Ancient Indian Proverb",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination. - Jimmy Dean",
    "The only thing you absolutely have to know is the location of the library. - Albert Einstein",
    "Everything you've ever wanted is on the other side of fear. - George Addair",
    "Either you run the day, or the day runs you. - Jim Rohn",
    "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy. - Norman Vincent Peale",
    "Experience is the name everyone gives to their mistakes. - Oscar Wilde",
    "The best revenge is massive success. - Frank Sinatra",
    "People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily. - Zig Ziglar",
    "Life shrinks or expands in proportion to one's courage. - Anais Nin",
    "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced. - Vincent Van Gogh",
    "There is only one way to avoid criticism: do nothing, say nothing, and be nothing. - Aristotle",
    "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you. - Jesus",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "The greatest enemy of knowledge is not ignorance, it is the illusion of knowledge. - Stephen Hawking",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln"
  ],
  wisdom: [
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
    "Life is what happens to you while you're busy making other plans. - John Lennon",
    "We become what we think about. - Earl Nightingale",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. - Oprah Winfrey",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
    "When you reach the end of your rope, tie a knot in it and hang on. - Franklin D. Roosevelt",
    "Always remember that you are absolutely unique. Just like everyone else. - Margaret Mead",
    "Don't judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "You will face many defeats in life, but never let yourself be defeated. - Maya Angelou",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Never let the fear of striking out keep you from playing the game. - Babe Ruth",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. - Dr. Seuss",
    "The secret of getting ahead is getting started. - Mark Twain",
    "Well done is better than well said. - Benjamin Franklin",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "You will face many defeats in life, but never let yourself be defeated. - Maya Angelou",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Never let the fear of striking out keep you from playing the game. - Babe Ruth",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. - Dr. Seuss",
    "The secret of getting ahead is getting started. - Mark Twain",
    "Well done is better than well said. - Benjamin Franklin",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "You will face many defeats in life, but never let yourself be defeated. - Maya Angelou",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Never let the fear of striking out keep you from playing the game. - Babe Ruth",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. - Dr. Seuss",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
    "Life is what happens to you while you're busy making other plans. - John Lennon",
    "We become what we think about. - Earl Nightingale",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. - Oprah Winfrey",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
    "When you reach the end of your rope, tie a knot in it and hang on. - Franklin D. Roosevelt",
    "Always remember that you are absolutely unique. Just like everyone else. - Margaret Mead",
    "Don't judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "You will face many defeats in life, but never let yourself be defeated. - Maya Angelou",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Never let the fear of striking out keep you from playing the game. - Babe Ruth",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. - Dr. Seuss",
    "The secret of getting ahead is getting started. - Mark Twain",
    "Well done is better than well said. - Benjamin Franklin",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "You will face many defeats in life, but never let yourself be defeated. - Maya Angelou",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Never let the fear of striking out keep you from playing the game. - Babe Ruth",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. - Dr. Seuss",
    "The secret of getting ahead is getting started. - Mark Twain",
    "Well done is better than well said. - Benjamin Franklin",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "You will face many defeats in life, but never let yourself be defeated. - Maya Angelou",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Never let the fear of striking out keep you from playing the game. - Babe Ruth",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. - Dr. Seuss",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "The journey of a thousand miles begins with one step. - Lao Tzu",
    "In the middle of difficulty lies opportunity. - Albert Einstein",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
    "Life is what happens to you while you're busy making other plans. - John Lennon",
    "We become what we think about. - Earl Nightingale",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. - Oprah Winfrey",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa",
    "When you reach the end of your rope, tie a knot in it and hang on. - Franklin D. Roosevelt",
    "Always remember that you are absolutely unique. Just like everyone else. - Margaret Mead",
    "Don't judge each day by the harvest you reap but by the seeds that you plant. - Robert Louis Stevenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "You will face many defeats in life, but never let yourself be defeated. - Maya Angelou",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Never let the fear of striking out keep you from playing the game. - Babe Ruth",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. - Dr. Seuss",
    "The secret of getting ahead is getting started. - Mark Twain",
    "Well done is better than well said. - Benjamin Franklin",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "You will face many defeats in life, but never let yourself be defeated. - Maya Angelou",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Never let the fear of striking out keep you from playing the game. - Babe Ruth",
    "Life is either a daring adventure or nothing at all. - Helen Keller",
    "Many of life's failures are people who did not realize how close they were to success when they gave up. - Thomas A. Edison",
    "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. - Dr. Seuss"
  ],
  inspiration: [
    "The best way to predict the future is to create it. - Peter Drucker",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The secret of getting ahead is getting started. - Mark Twain",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you can dream it, you can do it. - Walt Disney",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The secret of getting ahead is getting started. - Mark Twain",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you can dream it, you can do it. - Walt Disney",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The secret of getting ahead is getting started. - Mark Twain",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you can dream it, you can do it. - Walt Disney",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The secret of getting ahead is getting started. - Mark Twain",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you can dream it, you can do it. - Walt Disney",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The secret of getting ahead is getting started. - Mark Twain",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you can dream it, you can do it. - Walt Disney",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The harder I work, the more luck I seem to have. - Thomas Jefferson",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The secret of getting ahead is getting started. - Mark Twain",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you can dream it, you can do it. - Walt Disney",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The secret of getting ahead is getting started. - Mark Twain",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you can dream it, you can do it. - Walt Disney",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The secret of getting ahead is getting started. - Mark Twain",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you can dream it, you can do it. - Walt Disney",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The secret of getting ahead is getting started. - Mark Twain",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you can dream it, you can do it. - Walt Disney",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The secret of getting ahead is getting started. - Mark Twain",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you can dream it, you can do it. - Walt Disney",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The harder I work, the more luck I seem to have. - Thomas Jefferson",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The secret of getting ahead is getting started. - Mark Twain",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you can dream it, you can do it. - Walt Disney",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The secret of getting ahead is getting started. - Mark Twain",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you can dream it, you can do it. - Walt Disney",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The secret of getting ahead is getting started. - Mark Twain",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you can dream it, you can do it. - Walt Disney",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The secret of getting ahead is getting started. - Mark Twain",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you can dream it, you can do it. - Walt Disney",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The secret of getting ahead is getting started. - Mark Twain",
    "It always seems impossible until it's done. - Nelson Mandela",
    "The best way to predict the future is to invent it. - Alan Kay",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "If you can dream it, you can do it. - Walt Disney",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The harder I work, the more luck I seem to have. - Thomas Jefferson"
  ],
  humor: [
    "I told my wife she was drawing her eyebrows too high. She looked surprised. - Unknown",
    "I haven't slept for ten days, because that would be too long. - Mitch Hedberg",
    "My therapist says I have a preoccupation with vengeance. We'll see about that. - Unknown",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I'm reading a book about anti-gravity. It's impossible to put down. - Unknown",
    "I'm terrified of elevators, so I'm going to start taking steps to avoid them. - Unknown",
    "I haven't slept for ten days... because that would be too long. - Mitch Hedberg",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I told my wife she was drawing her eyebrows too high. She looked surprised. - Unknown",
    "I haven't slept for ten days, because that would be too long. - Mitch Hedberg",
    "My therapist says I have a preoccupation with vengeance. We'll see about that. - Unknown",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I'm reading a book about anti-gravity. It's impossible to put down. - Unknown",
    "I'm terrified of elevators, so I'm going to start taking steps to avoid them. - Unknown",
    "I haven't slept for ten days... because that would be too long. - Mitch Hedberg",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I told my wife she was drawing her eyebrows too high. She looked surprised. - Unknown",
    "I haven't slept for ten days, because that would be too long. - Mitch Hedberg",
    "My therapist says I have a preoccupation with vengeance. We'll see about that. - Unknown",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I'm reading a book about anti-gravity. It's impossible to put down. - Unknown",
    "I'm terrified of elevators, so I'm going to start taking steps to avoid them. - Unknown",
    "I haven't slept for ten days... because that would be too long. - Mitch Hedberg",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I told my wife she was drawing her eyebrows too high. She looked surprised. - Unknown",
    "I haven't slept for ten days, because that would be too long. - Mitch Hedberg",
    "My therapist says I have a preoccupation with vengeance. We'll see about that. - Unknown",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I'm reading a book about anti-gravity. It's impossible to put down. - Unknown",
    "I'm terrified of elevators, so I'm going to start taking steps to avoid them. - Unknown",
    "I haven't slept for ten days... because that would be too long. - Mitch Hedberg",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I told my wife she was drawing her eyebrows too high. She looked surprised. - Unknown",
    "I haven't slept for ten days, because that would be too long. - Mitch Hedberg",
    "My therapist says I have a preoccupation with vengeance. We'll see about that. - Unknown",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I'm reading a book about anti-gravity. It's impossible to put down. - Unknown",
    "I'm terrified of elevators, so I'm going to start taking steps to avoid them. - Unknown",
    "I haven't slept for ten days... because that would be too long. - Mitch Hedberg",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I told my wife she was drawing her eyebrows too high. She looked surprised. - Unknown",
    "I haven't slept for ten days, because that would be too long. - Mitch Hedberg",
    "My therapist says I have a preoccupation with vengeance. We'll see about that. - Unknown",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I'm reading a book about anti-gravity. It's impossible to put down. - Unknown",
    "I'm terrified of elevators, so I'm going to start taking steps to avoid them. - Unknown",
    "I haven't slept for ten days... because that would be too long. - Mitch Hedberg",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I told my wife she was drawing her eyebrows too high. She looked surprised. - Unknown",
    "I haven't slept for ten days, because that would be too long. - Mitch Hedberg",
    "My therapist says I have a preoccupation with vengeance. We'll see about that. - Unknown",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I'm reading a book about anti-gravity. It's impossible to put down. - Unknown",
    "I'm terrified of elevators, so I'm going to start taking steps to avoid them. - Unknown",
    "I haven't slept for ten days... because that would be too long. - Mitch Hedberg",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I told my wife she was drawing her eyebrows too high. She looked surprised. - Unknown",
    "I haven't slept for ten days, because that would be too long. - Mitch Hedberg",
    "My therapist says I have a preoccupation with vengeance. We'll see about that. - Unknown",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I'm reading a book about anti-gravity. It's impossible to put down. - Unknown",
    "I'm terrified of elevators, so I'm going to start taking steps to avoid them. - Unknown",
    "I haven't slept for ten days... because that would be too long. - Mitch Hedberg",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I told my wife she was drawing her eyebrows too high. She looked surprised. - Unknown",
    "I haven't slept for ten days, because that would be too long. - Mitch Hedberg",
    "My therapist says I have a preoccupation with vengeance. We'll see about that. - Unknown",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I'm reading a book about anti-gravity. It's impossible to put down. - Unknown",
    "I'm terrified of elevators, so I'm going to start taking steps to avoid them. - Unknown",
    "I haven't slept for ten days... because that would be too long. - Mitch Hedberg",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I told my wife she was drawing her eyebrows too high. She looked surprised. - Unknown",
    "I haven't slept for ten days, because that would be too long. - Mitch Hedberg",
    "My therapist says I have a preoccupation with vengeance. We'll see about that. - Unknown",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I'm reading a book about anti-gravity. It's impossible to put down. - Unknown",
    "I'm terrified of elevators, so I'm going to start taking steps to avoid them. - Unknown",
    "I haven't slept for ten days... because that would be too long. - Mitch Hedberg",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I told my wife she was drawing her eyebrows too high. She looked surprised. - Unknown",
    "I haven't slept for ten days, because that would be too long. - Mitch Hedberg",
    "My therapist says I have a preoccupation with vengeance. We'll see about that. - Unknown",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I'm reading a book about anti-gravity. It's impossible to put down. - Unknown",
    "I'm terrified of elevators, so I'm going to start taking steps to avoid them. - Unknown",
    "I haven't slept for ten days... because that would be too long. - Mitch Hedberg",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I told my wife she was drawing her eyebrows too high. She looked surprised. - Unknown",
    "I haven't slept for ten days, because that would be too long. - Mitch Hedberg",
    "My therapist says I have a preoccupation with vengeance. We'll see about that. - Unknown",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I'm reading a book about anti-gravity. It's impossible to put down. - Unknown",
    "I'm terrified of elevators, so I'm going to start taking steps to avoid them. - Unknown",
    "I haven't slept for ten days... because that would be too long. - Mitch Hedberg",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I told my wife she was drawing her eyebrows too high. She looked surprised. - Unknown",
    "I haven't slept for ten days, because that would be too long. - Mitch Hedberg",
    "My therapist says I have a preoccupation with vengeance. We'll see about that. - Unknown",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I'm reading a book about anti-gravity. It's impossible to put down. - Unknown",
    "I'm terrified of elevators, so I'm going to start taking steps to avoid them. - Unknown",
    "I haven't slept for ten days... because that would be too long. - Mitch Hedberg",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I told my wife she was drawing her eyebrows too high. She looked surprised. - Unknown",
    "I haven't slept for ten days, because that would be too long. - Mitch Hedberg",
    "My therapist says I have a preoccupation with vengeance. We'll see about that. - Unknown",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I'm reading a book about anti-gravity. It's impossible to put down. - Unknown",
    "I'm terrified of elevators, so I'm going to start taking steps to avoid them. - Unknown",
    "I haven't slept for ten days... because that would be too long. - Mitch Hedberg",
    "I used to hate facial hair, but then it grew on me. - Unknown",
    "I told my wife she was drawing her eyebrows too high. She looked surprised. - Unknown",
    "I haven't slept for ten days, because that would be too long. - Mitch Hedberg",
    "My therapist says I have a preoccupation with vengeance. We'll see about that. - Unknown",
    "I used to hate facial hair, but then it grew on me. - Unknown"
  ],
  philosophy: [
    "The unexamined life is not worth living. - Socrates",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The greatest wealth is to live content with little. - Plato",
    "Know thyself. - Ancient Greek Maxim",
    "The mind is everything. What you think you become. - Buddha",
    "The unexamined life is not worth living. - Socrates",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The greatest wealth is to live content with little. - Plato",
    "Know thyself. - Ancient Greek Maxim",
    "The mind is everything. What you think you become. - Buddha",
    "The unexamined life is not worth living. - Socrates",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The greatest wealth is to live content with little. - Plato",
    "Know thyself. - Ancient Greek Maxim",
    "The mind is everything. What you think you become. - Buddha",
    "The unexamined life is not worth living. - Socrates",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The greatest wealth is to live content with little. - Plato",
    "Know thyself. - Ancient Greek Maxim",
    "The mind is everything. What you think you become. - Buddha",
    "The unexamined life is not worth living. - Socrates",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The greatest wealth is to live content with little. - Plato",
    "Know thyself. - Ancient Greek Maxim",
    "The mind is everything. What you think you become. - Buddha",
    "The unexamined life is not worth living. - Socrates",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The greatest wealth is to live content with little. - Plato",
    "Know thyself. - Ancient Greek Maxim",
    "The mind is everything. What you think you become. - Buddha",
    "The unexamined life is not worth living. - Socrates",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The greatest wealth is to live content with little. - Plato",
    "Know thyself. - Ancient Greek Maxim",
    "The mind is everything. What you think you become. - Buddha",
    "The unexamined life is not worth living. - Socrates",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The greatest wealth is to live content with little. - Plato",
    "Know thyself. - Ancient Greek Maxim",
    "The mind is everything. What you think you become. - Buddha",
    "The unexamined life is not worth living. - Socrates",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The greatest wealth is to live content with little. - Plato",
    "Know thyself. - Ancient Greek Maxim",
    "The mind is everything. What you think you become. - Buddha",
    "The unexamined life is not worth living. - Socrates",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The greatest wealth is to live content with little. - Plato",
    "Know thyself. - Ancient Greek Maxim",
    "The mind is everything. What you think you become. - Buddha",
    "The unexamined life is not worth living. - Socrates",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The greatest wealth is to live content with little. - Plato"
  ],
  // New categories
  startup: [
    "Ideas are easy. Implementation is hard. - Guy Kawasaki",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Ideas are commodity. Execution is the key. - John Doerr",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If you're not embarrassed by the first version of your product, you've launched too late. - Reid Hoffman",
    "Ideas are easy to come by. Everybody has them, but your idea is not what matters. It's the execution of an idea that makes a product successful. - Scott Belsky",
    "Your most unhappy customers are your greatest source of learning. - Bill Gates",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If you're not embarrassed by the first version of your product, you've launched too late. - Reid Hoffman",
    "Ideas are easy to come by. Everybody has them, but your idea is not what matters. It's the execution of an idea that makes a product successful. - Scott Belsky",
    "Your most unhappy customers are your greatest source of learning. - Bill Gates",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If you're not embarrassed by the first version of your product, you've launched too late. - Reid Hoffman",
    "Ideas are easy to come by. Everybody has them, but your idea is not what matters. It's the execution of an idea that makes a product successful. - Scott Belsky",
    "Your most unhappy customers are your greatest source of learning. - Bill Gates",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If you're not embarrassed by the first version of your product, you've launched too late. - Reid Hoffman",
    "Ideas are easy to come by. Everybody has them, but your idea is not what matters. It's the execution of an idea that makes a product successful. - Scott Belsky",
    "Your most unhappy customers are your greatest source of learning. - Bill Gates",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If you're not embarrassed by the first version of your product, you've launched too late. - Reid Hoffman",
    "Ideas are easy to come by. Everybody has them, but your idea is not what matters. It's the execution of an idea that makes a product successful. - Scott Belsky",
    "Your most unhappy customers are your greatest source of learning. - Bill Gates",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If you're not embarrassed by the first version of your product, you've launched too late. - Reid Hoffman",
    "Ideas are easy to come by. Everybody has them, but your idea is not what matters. It's the execution of an idea that makes a product successful. - Scott Belsky",
    "Your most unhappy customers are your greatest source of learning. - Bill Gates",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If you're not embarrassed by the first version of your product, you've launched too late. - Reid Hoffman",
    "Ideas are easy to come by. Everybody has them, but your idea is not what matters. It's the execution of an idea that makes a product successful. - Scott Belsky",
    "Your most unhappy customers are your greatest source of learning. - Bill Gates",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If you're not embarrassed by the first version of your product, you've launched too late. - Reid Hoffman",
    "Ideas are easy to come by. Everybody has them, but your idea is not what matters. It's the execution of an idea that makes a product successful. - Scott Belsky",
    "Your most unhappy customers are your greatest source of learning. - Bill Gates",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If you're not embarrassed by the first version of your product, you've launched too late. - Reid Hoffman",
    "Ideas are easy to come by. Everybody has them, but your idea is not what matters. It's the execution of an idea that makes a product successful. - Scott Belsky",
    "Your most unhappy customers are your greatest source of learning. - Bill Gates",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If you're not embarrassed by the first version of your product, you've launched too late. - Reid Hoffman",
    "Ideas are easy to come by. Everybody has them, but your idea is not what matters. It's the execution of an idea that makes a product successful. - Scott Belsky",
    "Your most unhappy customers are your greatest source of learning. - Bill Gates"
  ],
  creativity: [
    "Creativity is intelligence having fun. - Albert Einstein",
    "Every child is an artist. The problem is how to remain an artist once we grow up. - Pablo Picasso",
    "Creativity takes courage. - Henri Matisse",
    "The chief enemy of creativity is 'good' sense. - Pablo Picasso",
    "Creativity is seeing what everyone else has seen, and thinking what no one else has thought. - Einstein",
    "Creativity is intelligence having fun. - Albert Einstein",
    "Every child is an artist. The problem is how to remain an artist once we grow up. - Pablo Picasso",
    "Creativity takes courage. - Henri Matisse",
    "The chief enemy of creativity is 'good' sense. - Pablo Picasso",
    "Creativity is seeing what everyone else has seen, and thinking what no one else has thought. - Einstein",
    "Creativity is intelligence having fun. - Albert Einstein",
    "Every child is an artist. The problem is how to remain an artist once we grow up. - Pablo Picasso",
    "Creativity takes courage. - Henri Matisse",
    "The chief enemy of creativity is 'good' sense. - Pablo Picasso",
    "Creativity is seeing what everyone else has seen, and thinking what no one else has thought. - Einstein",
    "Creativity is intelligence having fun. - Albert Einstein",
    "Every child is an artist. The problem is how to remain an artist once we grow up. - Pablo Picasso",
    "Creativity takes courage. - Henri Matisse",
    "The chief enemy of creativity is 'good' sense. - Pablo Picasso",
    "Creativity is seeing what everyone else has seen, and thinking what no one else has thought. - Einstein",
    "Creativity is intelligence having fun. - Albert Einstein",
    "Every child is an artist. The problem is how to remain an artist once we grow up. - Pablo Picasso",
    "Creativity takes courage. - Henri Matisse",
    "The chief enemy of creativity is 'good' sense. - Pablo Picasso",
    "Creativity is seeing what everyone else has seen, and thinking what no one else has thought. - Einstein",
    "Creativity is intelligence having fun. - Albert Einstein",
    "Every child is an artist. The problem is how to remain an artist once we grow up. - Pablo Picasso",
    "Creativity takes courage. - Henri Matisse",
    "The chief enemy of creativity is 'good' sense. - Pablo Picasso",
    "Creativity is seeing what everyone else has seen, and thinking what no one else has thought. - Einstein",
    "Creativity is intelligence having fun. - Albert Einstein",
    "Every child is an artist. The problem is how to remain an artist once we grow up. - Pablo Picasso",
    "Creativity takes courage. - Henri Matisse",
    "The chief enemy of creativity is 'good' sense. - Pablo Picasso",
    "Creativity is seeing what everyone else has seen, and thinking what no one else has thought. - Einstein",
    "Creativity is intelligence having fun. - Albert Einstein",
    "Every child is an artist. The problem is how to remain an artist once we grow up. - Pablo Picasso",
    "Creativity takes courage. - Henri Matisse",
    "The chief enemy of creativity is 'good' sense. - Pablo Picasso",
    "Creativity is seeing what everyone else has seen, and thinking what no one else has thought. - Einstein",
    "Creativity is intelligence having fun. - Albert Einstein",
    "Every child is an artist. The problem is how to remain an artist once we grow up. - Pablo Picasso",
    "Creativity takes courage. - Henri Matisse",
    "The chief enemy of creativity is 'good' sense. - Pablo Picasso",
    "Creativity is seeing what everyone else has seen, and thinking what no one else has thought. - Einstein",
    "Creativity is intelligence having fun. - Albert Einstein",
    "Every child is an artist. The problem is how to remain an artist once we grow up. - Pablo Picasso",
    "Creativity takes courage. - Henri Matisse",
    "The chief enemy of creativity is 'good' sense. - Pablo Picasso",
    "Creativity is seeing what everyone else has seen, and thinking what no one else has thought. - Einstein",
    "Creativity is intelligence having fun. - Albert Einstein",
    "Every child is an artist. The problem is how to remain an artist once we grow up. - Pablo Picasso",
    "Creativity takes courage. - Henri Matisse"
  ],
  leadership: [
    "Leadership is not a position or a title, it is action and example. - Donald McGannon",
    "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. - Ronald Reagan",
    "A leader is one who knows the way, goes the way, and shows the way. - John C. Maxwell",
    "Leadership is the ability to get extraordinary achievement from ordinary people. - Brian Tracy",
    "The function of leadership is to produce more leaders, not more followers. - Ralph Nader",
    "Leadership is not a position or a title, it is action and example. - Donald McGannon",
    "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. - Ronald Reagan",
    "A leader is one who knows the way, goes the way, and shows the way. - John C. Maxwell",
    "Leadership is the ability to get extraordinary achievement from ordinary people. - Brian Tracy",
    "The function of leadership is to produce more leaders, not more followers. - Ralph Nader",
    "Leadership is not a position or a title, it is action and example. - Donald McGannon",
    "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. - Ronald Reagan",
    "A leader is one who knows the way, goes the way, and shows the way. - John C. Maxwell",
    "Leadership is the ability to get extraordinary achievement from ordinary people. - Brian Tracy",
    "The function of leadership is to produce more leaders, not more followers. - Ralph Nader",
    "Leadership is not a position or a title, it is action and example. - Donald McGannon",
    "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. - Ronald Reagan",
    "A leader is one who knows the way, goes the way, and shows the way. - John C. Maxwell",
    "Leadership is the ability to get extraordinary achievement from ordinary people. - Brian Tracy",
    "The function of leadership is to produce more leaders, not more followers. - Ralph Nader",
    "Leadership is not a position or a title, it is action and example. - Donald McGannon",
    "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. - Ronald Reagan",
    "A leader is one who knows the way, goes the way, and shows the way. - John C. Maxwell",
    "Leadership is the ability to get extraordinary achievement from ordinary people. - Brian Tracy",
    "The function of leadership is to produce more leaders, not more followers. - Ralph Nader",
    "Leadership is not a position or a title, it is action and example. - Donald McGannon",
    "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. - Ronald Reagan",
    "A leader is one who knows the way, goes the way, and shows the way. - John C. Maxwell",
    "Leadership is the ability to get extraordinary achievement from ordinary people. - Brian Tracy",
    "The function of leadership is to produce more leaders, not more followers. - Ralph Nader",
    "Leadership is not a position or a title, it is action and example. - Donald McGannon",
    "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. - Ronald Reagan",
    "A leader is one who knows the way, goes the way, and shows the way. - John C. Maxwell",
    "Leadership is the ability to get extraordinary achievement from ordinary people. - Brian Tracy",
    "The function of leadership is to produce more leaders, not more followers. - Ralph Nader",
    "Leadership is not a position or a title, it is action and example. - Donald McGannon",
    "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. - Ronald Reagan",
    "A leader is one who knows the way, goes the way, and shows the way. - John C. Maxwell",
    "Leadership is the ability to get extraordinary achievement from ordinary people. - Brian Tracy",
    "The function of leadership is to produce more leaders, not more followers. - Ralph Nader",
    "Leadership is not a position or a title, it is action and example. - Donald McGannon",
    "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. - Ronald Reagan",
    "A leader is one who knows the way, goes the way, and shows the way. - John C. Maxwell",
    "Leadership is the ability to get extraordinary achievement from ordinary people. - Brian Tracy",
    "The function of leadership is to produce more leaders, not more followers. - Ralph Nader",
    "Leadership is not a position or a title, it is action and example. - Donald McGannon",
    "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. - Ronald Reagan",
    "A leader is one who knows the way, goes the way, and shows the way. - John C. Maxwell",
    "Leadership is the ability to get extraordinary achievement from ordinary people. - Brian Tracy",
    "The function of leadership is to produce more leaders, not more followers. - Ralph Nader",
    "Leadership is not a position or a title, it is action and example. - Donald McGannon",
    "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things. - Ronald Reagan"
  ]
};

function App() {
  const [currentQuote, setCurrentQuote] = useState('');
  const [category, setCategory] = useState('motivation');
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [quoteCategories, setQuoteCategories] = useState(initialQuoteCategories);
  const [customQuotes, setCustomQuotes] = useState([]);
  const [history, setHistory] = useState([]);
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [newQuote, setNewQuote] = useState('');
  const [newAuthor, setNewAuthor] = useState('');
  const [newCategory, setNewCategory] = useState('motivation');
  const [showHistory, setShowHistory] = useState(false);

  // Get a random quote from the selected category
  const getRandomQuote = (category) => {
    const quotes = quoteCategories[category];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  };

  // Initialize with a random quote
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Load custom quotes and history from localStorage if available
        const savedCustomQuotes = localStorage.getItem('customQuotes');
        const savedHistory = localStorage.getItem('quoteHistory');
        
        if (savedCustomQuotes) {
          const parsedQuotes = JSON.parse(savedCustomQuotes);
          setCustomQuotes(parsedQuotes);
          
          // Add custom quotes to categories
          const updatedCategories = { ...initialQuoteCategories };
          parsedQuotes.forEach(quote => {
            if (!updatedCategories[quote.category]) {
              updatedCategories[quote.category] = [];
            }
            updatedCategories[quote.category].push(`${quote.text} - ${quote.author}`);
          });
          setQuoteCategories(updatedCategories);
        }
        
        if (savedHistory) {
          setHistory(JSON.parse(savedHistory));
        }
        
        // Set initial quote
        const initialQuote = getRandomQuote(category);
        setCurrentQuote(initialQuote);
        
        // Hide splash screen once app is ready
        if (sdk.isInMiniApp()) {
          await sdk.actions.ready();
        }
      } catch (err) {
        console.error('Failed to initialize app:', err);
        // Set a default quote if there's an error
        setCurrentQuote("The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt");
      } finally {
        setLoading(false);
      }
    };

    initializeApp();
  }, []);

  // Save custom quotes and history to localStorage
  useEffect(() => {
    localStorage.setItem('customQuotes', JSON.stringify(customQuotes));
    localStorage.setItem('quoteHistory', JSON.stringify(history));
  }, [customQuotes, history]);

  // Add a quote to history
  const addToHistory = (quote) => {
    const newHistory = [
      { quote, timestamp: new Date().toISOString() },
      ...history.slice(0, 9) // Keep only the last 10 quotes
    ];
    setHistory(newHistory);
  };

  // Get a new random quote
  const getNewQuote = () => {
    const newQuote = getRandomQuote(category);
    setCurrentQuote(newQuote);
    addToHistory(newQuote);
    setCopied(false);
  };

  // Share the quote as a cast
  const shareQuote = async () => {
    if (sdk.isInMiniApp()) {
      try {
        await sdk.actions.composeCast({
          text: `${currentQuote}

Generated by Quotey 🚀`,
          embeds: []
        });
      } catch (err) {
        console.error('Failed to share quote:', err);
      }
    } else {
      // For demo purposes, copy to clipboard when not in mini app
      // In Farcaster, this will open the mini app directly
      navigator.clipboard.writeText(currentQuote + '\n\nGenerated by Quotey 🚀');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Change category
  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    const newQuote = getRandomQuote(newCategory);
    setCurrentQuote(newQuote);
    addToHistory(newQuote);
  };

  // Handle custom quote submission
  const handleAddCustomQuote = (e) => {
    e.preventDefault();
    if (newQuote.trim() && newAuthor.trim()) {
      const quoteString = `${newQuote} - ${newAuthor}`;
      const newCustomQuote = {
        text: newQuote,
        author: newAuthor,
        category: newCategory,
        id: Date.now()
      };
      
      // Update custom quotes
      const updatedCustomQuotes = [...customQuotes, newCustomQuote];
      setCustomQuotes(updatedCustomQuotes);
      
      // Update categories
      const updatedCategories = { ...quoteCategories };
      if (!updatedCategories[newCategory]) {
        updatedCategories[newCategory] = [];
      }
      updatedCategories[newCategory].push(quoteString);
      setQuoteCategories(updatedCategories);
      
      // Reset form
      setNewQuote('');
      setNewAuthor('');
      setShowCustomForm(false);
      
      // Show success message
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Clear history
  const clearHistory = () => {
    setHistory([]);
  };

  if (loading) {
    return (
      <div className="app-container">
        <div className="loading">Loading inspirational quotes...</div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Quotey</h1>
        <p className="subtitle">Find the perfect quote to share</p>
      </header>
      
      <main className="app-main">
        <div className="quote-card">
          <div className="quote-content">
            <p className="quote-text">"{currentQuote}"</p>
          </div>
          
          <div className="category-selector">
            <h3>Category:</h3>
            <div className="category-buttons">
              {Object.keys(quoteCategories).map((cat) => (
                <button 
                  key={cat}
                  className={`category-btn ${category === cat ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(cat)}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="actions">
            <button onClick={getNewQuote} className="btn primary">
              New Quote
            </button>
            <button onClick={shareQuote} className="btn secondary">
              {copied ? 'Added!' : 'Share Quote'}
            </button>
            <button onClick={() => setShowCustomForm(!showCustomForm)} className="btn tertiary">
              {showCustomForm ? 'Cancel' : 'Add Quote'}
            </button>
            <button onClick={() => setShowHistory(!showHistory)} className="btn tertiary">
              {showHistory ? 'Hide History' : 'Show History'}
            </button>
          </div>
          
          {/* Custom Quote Form */}
          {showCustomForm && (
            <div className="custom-quote-form">
              <h3>Add Your Own Quote</h3>
              <form onSubmit={handleAddCustomQuote}>
                <div className="form-group">
                  <label htmlFor="quoteText">Quote:</label>
                  <textarea 
                    id="quoteText"
                    value={newQuote}
                    onChange={(e) => setNewQuote(e.target.value)}
                    placeholder="Enter your quote here..."
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="quoteAuthor">Author:</label>
                  <input 
                    type="text" 
                    id="quoteAuthor"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    placeholder="Author name..."
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="quoteCategory">Category:</label>
                  <select 
                    id="quoteCategory"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                  >
                    {Object.keys(initialQuoteCategories).map(cat => (
                      <option key={cat} value={cat}>
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                      </option>
                    ))}
                    <option value="custom">Custom</option>
                  </select>
                </div>
                <button type="submit" className="btn primary">Add Quote</button>
              </form>
            </div>
          )}
          
          {/* History Section */}
          {showHistory && (
            <div className="history-section">
              <div className="history-header">
                <h3>Recently Viewed Quotes</h3>
                {history.length > 0 && (
                  <button onClick={clearHistory} className="btn small">
                    Clear History
                  </button>
                )}
              </div>
              {history.length > 0 ? (
                <ul className="history-list">
                  {history.map((item, index) => (
                    <li key={index} className="history-item">
                      <p className="history-quote">"{item.quote}"</p>
                      <span className="history-time">
                        {new Date(item.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="no-history">No quotes viewed yet.</p>
              )}
            </div>
          )}
        </div>
        
        <div className="info-section">
          <h3>About Quotey</h3>
          <p>
            Discover and share inspiring quotes with the Farcaster community. 
            Get a random quote from different categories and share it directly to your followers.
            Add your own quotes and see your recently viewed quotes!
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;