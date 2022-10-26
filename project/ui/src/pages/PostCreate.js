import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { createPostAsync } from "../redux/actions/postActions";

const PostCreate = () => {
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  const submitHandler = () => {
    let id = posts[posts.length - 1].id + 1;
    let peminjaman = 50000;
    let pengembalian = 50000;
    let temp = {
      id,
      title,
      peminjaman,
      pengembalian,
    };
    dispatch(createPostAsync(temp));
  };


  return (
    <>
    <div className='container'>
      <form>
        <h3 className='text-center'>Peminjaman Buku</h3>
        <div class='mb-3'>
          <label for ='Buku' className='form-label'>Nama Buku </label>
          <input type='text' class='form-control' id='Buku' />
        </div>
        <div class='mb-3'>
          <label for ='date-picker' class="md-form md-outline input-with-post-icon datepicker">Tanggal Peminjaman </label>
          <input type='date' class='form-control' id='date-picker' />
        </div>
        <div class='mb-3'>
          <label for ='date-picker' class="md-form md-outline input-with-post-icon datepicker">Tanggal Pengembalian </label>
          <input type='date' class='form-control' id='date-picker' />
        </div>
        <button type='submit' className='btn btn-success'>Submit</button>
        <button type='cancel' className='btn btn-danger'>Cancel</button>
      </form>
    </div>
    </>
  )
}

export default PostCreate