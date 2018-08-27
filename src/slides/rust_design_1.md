### Design of Rust 

<p class="fragment">
    Rust was designed to be fast, concurrent, and memory safe.
</p>
<p class="fragment">
    Basically, Rust wont let you do anything that breakes this design goal, unless explicitely stated.
</p>
<p class="fragment">
    Ownership of a section of memory is strictly enforced.
</p>
<p class="fragment">
    When calling a function, any arguments are borrowed by the function. They may be returned but don't have to be.
</p>
<p class="fragment">
    A reference to memory may be shared but a <emph>lifetime</emph> must also follow the reference to ensure the data is still available.
</p>
