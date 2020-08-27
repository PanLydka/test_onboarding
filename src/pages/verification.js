import React, { useEffect } from "react";




const Verification = () => {

    useEffect(() => {
        document.querySelector("#test").scrollIntoView();
    }, [])

    return(
        <div className="step--container">
               <a href="https://panlydka.github.io/test_repo_public/"> github </a>
            <a href="https://webrtc.github.io/samples/" > webrtc </a>
            <p id="test"> test</p>
            <h1>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in accumsan felis. Aenean efficitur nec mauris eget condimentum. Sed in tortor dictum, mollis dolor in, pretium eros. Phasellus quis tempus nibh, sit amet eleifend erat. Ut ac elit et felis lacinia ultrices eget et dolor. Sed convallis odio felis, a laoreet mauris viverra non. In vehicula, neque ut bibendum pharetra, odio metus imperdiet dui, ut aliquam nisl lectus non ligula. Sed nec vestibulum sapien, sit amet accumsan risus. Fusce a ipsum vehicula, laoreet elit vel, ultrices mauris. Ut enim neque, feugiat et tempus non, imperdiet et tortor.

            Ut at ante at augue eleifend suscipit. Morbi fermentum ipsum sed venenatis volutpat. Praesent fringilla tincidunt arcu quis elementum. Pellentesque mattis tempor luctus. Sed ultricies a tellus quis laoreet. Suspendisse posuere laoreet metus, ut dictum ipsum suscipit quis. Nullam lobortis tincidunt mi ac accumsan. Aenean pulvinar cursus sem a posuere. Donec tincidunt pharetra enim, vitae sollicitudin eros commodo ac. Donec ultricies sagittis quam venenatis malesuada.

            In nisi turpis, varius ac blandit sed, auctor eu lectus. Donec eget urna ante. Morbi vestibulum hendrerit lectus, a lobortis odio ornare ac. Phasellus sed elit volutpat, porttitor dui vel, cursus orci. Morbi neque turpis, malesuada nec sem sit amet, commodo sagittis velit. Suspendisse id auctor urna, eu maximus libero. Sed quis vestibulum turpis. Vivamus eu feugiat mauris. Pellentesque rutrum mauris ut ipsum pretium, a congue erat sagittis. Donec commodo viverra eros, sit amet condimentum tortor molestie eget. Morbi vel commodo leo, vitae dignissim libero. Sed lobortis metus at urna pretium pellentesque. Sed egestas porta ligula, id bibendum mi vehicula mollis. Proin sit amet justo sit amet augue malesuada auctor sodales luctus dui.
            In nisi turpis, varius ac blandit sed, auctor eu lectus. Donec eget urna ante. Morbi vestibulum hendrerit lectus, a lobortis odio ornare ac. Phasellus sed elit volutpat, porttitor dui vel, cursus orci. Morbi neque turpis, malesuada nec sem sit amet, commodo sagittis velit. Suspendisse id auctor urna, eu maximus libero. Sed quis vestibulum turpis. Vivamus eu feugiat mauris. Pellentesque rutrum mauris ut ipsum pretium, a congue erat sagittis. Donec commodo viverra eros, sit amet condimentum tortor molestie eget. Morbi vel commodo leo, vitae dignissim libero. Sed lobortis metus at urna pretium pellentesque. Sed egestas porta ligula, id bibendum mi vehicula mollis. Proin sit amet justo sit amet augue malesuada auctor sodales luctus dui.
</h1>
         

        </div>
    )
}

export default Verification;