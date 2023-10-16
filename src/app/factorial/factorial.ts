export function factorial(x: number) {
    let $f = 0, $a = 0, $b = 0;

    if (x == 0) {
        return 1;
    } else if (x.toString().length > 16 || x < 0) {
        return 0
    } else {
        for (let i = 1; $a != 1; i++) {
            $a = x - i
            $f == 0 ? $f = x * $a : $f *= $a
        }
        return $f
    }

}