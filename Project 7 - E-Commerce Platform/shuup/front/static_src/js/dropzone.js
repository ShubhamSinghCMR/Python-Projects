   
function activateDropzone($dropzone, attrs={}) {
    if(!$dropzone.length) {
        console.error("Error! [dropzone.js] Unable to find requested element ", $dropzone);
        return;
    }

    if (!(window.ShuupFrontConfig && window.ShuupFrontConfig.uploadUrl)) {
        return;
    }

    const selector = "#" + $dropzone.attr("id");
    const $data = $(selector).data();
    const uploadUrl = window.ShuupFrontConfig.uploadUrl;
    const dataKind = $dropzone.attr("data-kind")

    // Load attributes encoded in attributes with `data-dz-` prefixes
    // e.g.: data-dz-maxFilesize="10000"
    const extraAttrs = {};
    Object.keys($data).filter(attr => attr.startsWith("dz_")).forEach((attr) => {
        const attrKey = attr.replace("dz_", "");
        extraAttrs[attrKey] = $data[attr];
    });

    const params = Object.assign({
        url: uploadUrl,
        uploadUrl,
        params: {
            csrfmiddlewaretoken: window.ShuupFrontConfig.csrf
        },
        addRemoveLinks: true,
        dictRemoveFile: gettext("Clear"),
        autoProcessQueue: true,
        uploadMultiple: false,
        parallelUploads: 1,
        maxFiles: 1,
        dictDefaultMessage: gettext("Drop files here or click to browse."),
        clickable: false,
        accept: function(file, done) {
            if ($data.kind === "images" && file.type.indexOf("image") < 0) {
                done(gettext("only images can be uploaded!"));
            } else {
                done();
            }
        }
    }, extraAttrs, attrs);
    const dropzone = new Dropzone(selector, params);

    dropzone.on("addedfile", attrs.onAddedFile || function(file) {
        if(params.maxFiles === 1 && dropzone.files.length > 1) {
            dropzone.removeFile(dropzone.files[0]);
        }
    });

    dropzone.on("removedfile", attrs.onSuccess || function(data){
        $(selector).find("input").val("");
    });

    dropzone.on("success", attrs.onSuccess || function(data){
        console.log(data)
        // file selected through dnd
        if(data.xhr) {
            data = JSON.parse(data.xhr.responseText).file;
        }
        $(selector).find("input").val(data.id);
    });

    dropzone.on("queuecomplete", attrs.onQueueComplete || $.noop);

    $(selector).on("click", function() {
        const fileInput = document.createElement("input");
        document.body.appendChild(fileInput);

        if (dataKind === "images") {
            $(fileInput).prop("accept", "image/*");
        };

        $(fileInput).prop("type", "file").css("display", "none").on("change", (evt) => {
            const file = evt.target.files[0];
            dropzone.addFile(file);
            fileInput.remove();
        }).trigger("click");
    });

    const data = $(selector).data();
    if(data.url) {
        dropzone.files.push(data);
        dropzone.emit("addedfile", data);
        if(data.thumbnail){
            dropzone.emit("thumbnail", data, data.thumbnail);
        }
        dropzone.emit("complete", data);
    }
}

window.activateDropzones = function() {
    $("div[data-dropzone='true']").each(function(idx, object) {
        const dropzone = $(object);
        if(!dropzone.attr("id").includes("__prefix__") && dropzone.find(".dz-message").length === 0) {
            activateDropzone(dropzone);
        }
    });
};
window.activateDropzone = activateDropzone;

$(function(){
    window.activateDropzones();
});

module.exports = { activateDropzone }
