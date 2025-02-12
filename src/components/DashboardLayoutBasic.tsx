import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import CustomizedInputBase from './Search';
import MultipleSelectPlaceholder from './SelectRegion';

const NAVIGATION: Navigation = [
    {
        segment: 'countryList',
        title: 'countryList',
    },
    {
        segment: 'countryDetails',
        title: 'countryDetails',
    },
];

const demoTheme = extendTheme({
    colorSchemes: {
        light: { palette: { mode: 'light', primary: { main: '#000000' } } }, dark: { palette: { mode: 'dark', primary: { main: '#ffffff' } } },
    },
    colorSchemeSelector: 'class',
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 600,
            lg: 1200,
            xl: 1536,
        },
    },
});

function useDemoRouter(initialPath: string): Router {
    const [pathname, setPathname] = React.useState(initialPath);

    const router = React.useMemo(() => {
        return {
            pathname,
            searchParams: new URLSearchParams(),
            navigate: (path: string | URL) => setPathname(String(path)),
        };
    }, [pathname]);

    return router;
}

const Skeleton = styled('div')<{ height: number }>(({ theme, height }) => ({
    backgroundColor: theme.palette.action.hover,
    borderRadius: theme.shape.borderRadius,
    height,
    content: '" "',
}));

export default function DashboardLayoutBasic(props: any) {
    const { window } = props;

    const router = useDemoRouter('/countryList');

    return (
        <AppProvider
            navigation={NAVIGATION}
            // router={router}
            theme={demoTheme}>
            <DashboardLayout hideNavigation={true} slotProps={{ appTitle: { branding: { title: 'Where in the world?', logo: '' } } }}>
                <PageContainer title='' breadcrumbs={[]}>
                    <Grid container spacing={1}>
                        <Grid size={8}>
                            <CustomizedInputBase />
                            {/* <Skeleton height={100} /> */}
                        </Grid>
                        <Grid size={4}>
                            <MultipleSelectPlaceholder />
                            {/* <Skeleton height={100} /> */}
                        </Grid>
                    </Grid>
                </PageContainer>
            </DashboardLayout>
        </AppProvider >
    );
}
