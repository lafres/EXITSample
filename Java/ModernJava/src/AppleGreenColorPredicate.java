public class AppleGreenColorPredicate implements ApplePredicate{
    @Override
    public boolean test(Apple apple) {
        return AppleConst.GREEN.equals(apple.getColor());
    }
}
