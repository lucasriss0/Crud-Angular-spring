import org.springframework.web.bind.annotation.RestController;

import com.Lucas.crudspring.repository.CourseRepository;

@RestController
@RequestMapping("/api/curses")
@Component
@AllArgsConstrutctor
public class CourseController {
    
    private final CourseRepository courseRepository;

    @GetMapping
    public List<Course> list(){
        return CourseRepository.findAll();
    }
}
