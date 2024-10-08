   


(function() {
    // https://gist.github.com/mathewbyrne/1280286
    function slugify(text) {
      return text.toString().toLowerCase()
        .replace(/\s+/g, '-')           // Replace spaces with -
        .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
        .replace(/\-\-+/g, '-')         // Replace multiple - with single -
        .replace(/^-+/, '')             // Trim - from start of text
        .replace(/-+$/, '');            // Trim - from end of text
    }

    function autoSlugify() {
        var val = $(this).val();
        $(this).parent().next().find(".slugfield").val(slugify(val));
    }
    $(document).on("keyup", ".autoupdate-slug", autoSlugify);
})();
